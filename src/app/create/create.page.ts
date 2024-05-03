import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime.model';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  newAnime: Anime = new Anime();
  genres: string[] = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery",
    "Psychological", "Romance", "Science Fiction", "Slice of Life", "Supernatural",
    "Mecha", "Shounen", "Shoujo", "Seinen", "Josei", "Harem", "Historical"
  ];

  constructor(
    private animeService: AnimeService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async saveAnime() {
    try {
      await this.animeService.addAnime(this.newAnime);
      this.presentToast('Anime saved successfully!');
      this.router.navigate(['home']);
    } catch (error) {
      console.error('Error saving anime: ', error);
      this.presentErrorAlert('Error', 'Failed to save anime. Please try again later.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

  async presentErrorAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
