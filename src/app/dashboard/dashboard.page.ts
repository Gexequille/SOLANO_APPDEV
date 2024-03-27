import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
import { HarryService } from '../harry.service';
import { harryPotter } from '../model/harry.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  username: any;
  potter: harryPotter [] = [];

  constructor(private authenticate: AuthenticationService,
    private router: Router,
    private alertControl: AlertController,
    private toastControl: ToastController,
    private harry: HarryService
    ) {}

  ngOnInit(){
    this.authenticate.authenticated = false;
    this.username = localStorage.getItem('loggedInUser');
    this.harry.getHarry().subscribe((item: harryPotter[]) => {
      this.potter = item;
    });
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

}