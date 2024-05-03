import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, Firestore, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Anime } from './anime.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private firestore: Firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.firestore = getFirestore(app);
  }

  async addAnime(anime: Anime) {
    try {
      const animeCollection = collection(this.firestore, 'anime');
      const { id, ...animeData } = anime; 
      await addDoc(animeCollection, animeData);
    } catch (error) {
      console.error('Error adding anime: ', error);
      throw error;
    }
  }  

  async getAnimes(): Promise<Anime[]> {
    try {
      const animeCollection = collection(this.firestore, 'anime');
      const querySnapshot = await getDocs(animeCollection);
      const animes: Anime[] = [];
      querySnapshot.forEach((doc) => {
        const animeData = doc.data() as Anime;
        animeData.id = doc.id; 
        animes.push(animeData);
      });
      return animes;
    } catch (error) {
      console.error('Error getting animes: ', error);
      return [];
    }
  }
  
  async updateAnime(animeId: string, newData: Partial<Anime>) {
    try {
      const animeRef = doc(this.firestore, 'anime', animeId);
      await updateDoc(animeRef, newData);
    } catch (error) {
      console.error('Error updating anime: ', error);
    }
  }

  async deleteAnime(animeId: string) {
    try {
      const animeRef = doc(this.firestore, 'anime', animeId);
      await deleteDoc(animeRef);
      console.log('Anime deleted successfully from Firestore!');
    } catch (error) {
      console.error('Error deleting anime: ', error);
      throw error; 
    }
  }  
}
