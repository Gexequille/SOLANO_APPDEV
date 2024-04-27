import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  signupEmail: string = '';
  signupPassword: string = '';
  retypePass: string = '';

  constructor(private router: Router, 
    private alertController: AlertController) { }

  ngOnInit() {}

  async signup() {
    if (this.signupPassword !== this.retypePass) {
      const alert = await this.alertController.create({
        header: 'Password Mismatch',
        message: 'The passwords do not match. Please try again.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.signupEmail, this.signupPassword)
      .then((userCredential) => {
        console.log('Sign up successful', userCredential.user);
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.error('Sign up error', error);
        const errorMessage = error.message || 'An error occurred. Please try again.';
        const alert = this.alertController.create({
          header: 'Sign Up Error',
          message: errorMessage,
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
      });
  }
}
