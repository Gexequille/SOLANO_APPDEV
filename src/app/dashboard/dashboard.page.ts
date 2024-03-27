import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Covid19Service } from '../covid19.service';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  username: any;
  covidData: any[] = [];

  constructor(private authenticate: AuthenticationService,
    private router: Router,
    private alertControl: AlertController,
    private toastControl: ToastController,
    private covid19: Covid19Service
    ) {}

  ngOnInit(){
    this.authenticate.authenticated = false;
    this.username = localStorage.getItem('loggedInUser');
    this.fetchCovidData();
  }

  async logout() {
    const alert = await this.alertControl.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Logout',
          handler: () => {
            localStorage.removeItem('loggedInUser');
            this.router.navigate(['/login']);
            this.presentToast(); 
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastControl.create({
      message: 'Logged out successfully',
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

  fetchCovidData() {
    this.covid19.getCovidData().subscribe(
      (data: Object) => {
        this.covidData = data as any[]; 
      },
      (error) => {
        console.error(error);
      }
    );
  }  
}