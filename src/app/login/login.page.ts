import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : string =''
  password : string = ''

  constructor(private alertControl:AlertController, 
    private router: Router, 
    private authenticate: AuthenticationService,
    private toastControl: ToastController) { }

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.navigate(['dashboard/home']);
    }
  
  }

  async login() {
    const user = this.authenticateUser();
    if (user) {
      this.setLoggedInUser(user.username);
      this.navigateToDashboard();
      this.showLoginSuccessAlert();
    } else {
      this.showLoginFailedToast();
    }
  }

  private authenticateUser() {
    return this.credentials.find(
      (cred) => cred.username === this.username && cred.password === this.password
    );
  }

  private setLoggedInUser(username: string) {
    localStorage.setItem('loggedInUser', username);
  }

  private navigateToDashboard() {
    this.router.navigate(['dashboard/home']);
    this.authenticate.authenticated = true;
  }

  private async showLoginSuccessAlert() {
    const alert = await this.alertControl.create({
      header: 'Login',
      subHeader: 'Status',
      message: 'Login success!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  private async showLoginFailedToast() {
    const toast = await this.toastControl.create({
      message: 'Login Failed',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  credentials = [
    { username: 'user1', password: '1234' },
    { username: 'user2', password: '5678' },
    { username: 'admin', password: 'admin' },
  ];
}