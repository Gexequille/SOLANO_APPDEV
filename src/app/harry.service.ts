import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { harryPotter } from './model/harry.model';

@Injectable({
  providedIn: 'root'
})
export class HarryService {

  constructor(private http: HttpClient) { }

  getHarry(): Observable<harryPotter[]> {
    return this.http.get<harryPotter[]>('https://www.googleapis.com/books/v1/volumes?q=Harry+Potter');
  }
  
}
