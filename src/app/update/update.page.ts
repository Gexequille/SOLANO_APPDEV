import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../anime.model';
import { AnimeService } from '../anime.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  animeId: string = '';
  anime: Anime | undefined;
  updatedAnime: Partial<Anime> = {};
  isOngoingValue: boolean = false; 
  genres: string[] = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery",
    "Psychological", "Romance", "Science Fiction", "Slice of Life", "Supernatural",
    "Mecha", "Shounen", "Shoujo", "Seinen", "Josei", "Harem", "Historical"
  ];

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    this.animeId = this.route.snapshot.paramMap.get('id') || '';
    if (this.animeId) {
      try {
        const animes = await this.animeService.getAnimes();
        const anime = animes.find(anime => anime.id === this.animeId);
        if (anime) {
          this.anime = anime;
          this.updatedAnime = { ...anime };
          this.isOngoingValue = anime.isOngoing;
        } else {
          console.error('Anime not found!');
        }
      } catch (error) {
        console.error('Error fetching anime: ', error);
        this.presentAlert('Error', 'Failed to fetch anime. Please try again.');
      }
    }
  }

  async updateAnime() {
    if (!this.animeId) {
      console.error('Missing anime ID for update!');
      return;
    }

    try {
      await this.animeService.updateAnime(this.animeId, this.updatedAnime);
      this.presentToast('Anime updated successfully!');
      this.router.navigate(['home']);
    } catch (error) {
      console.error('Error updating anime: ', error);
      this.presentAlert('Error', 'Failed to update anime. Please try again.');
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

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  async confirmUpdate(): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirm Update',
      message: 'Are you sure you want to update this anime?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => false
        },
        {
          text: 'Update',
          handler: () => true
        }
      ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    return role === 'Update';
  }  
}
