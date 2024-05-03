import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController, 
    private router: Router,
    private authenticate: AuthenticationService) { }

  ngOnInit() {
  }

  async signin() {
    this.authenticate.addCredentials(this.email,this.password)
    if (!this.email || !this.password) {
      this.presentAlert('Error', 'Please fill in all the fields.');
      return;
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigate(['home']); 
        this.presentAlert('Success', 'You have successfully signed in!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(error);
        this.presentAlert('Error', errorMessage);
      });

    this.email = '';
    this.password = '';
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
