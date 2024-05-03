import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime.model';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  animeList: Anime[] = [];

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private authService: AuthenticationService
  ) { }

  async ngOnInit() {
    try {
      this.animeList = await this.animeService.getAnimes();
    } catch (error) {
      console.error('Error fetching anime list: ', error);
    }
  }

  async confirmDelete(animeId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this anime?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: async () => {
            try {
              await this.animeService.deleteAnime(animeId);
              this.animeList = this.animeList.filter(anime => anime.id !== animeId);
              console.log('Anime deleted successfully!');
              this.presentToast('Anime deleted successfully!');
            } catch (error) {
              console.error('Error deleting anime: ', error);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async signout() {
    const alert = await this.alertController.create({
      header: 'Confirm Sign Out',
      message: 'Are you sure you want to Sign Out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'Sign Out',
          handler: () => {
            this.authService.signOut();
            this.router.navigate(['/sign-in']);
            this.presentToast('Signed out successfully.');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  create(){
    this.router.navigate(['create/signup']);
  }
}
