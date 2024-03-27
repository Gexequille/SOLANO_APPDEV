import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  constructor(private http: HttpClient) {}

  getCovidData() {
    const options = {
      headers: {
        'X-RapidAPI-Key': '2da6132c78mshe9dd528c50494f7p126c38jsne3077d8df364',
        'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
      }
    };

    return this.http.get('https://covid-19-tracking.p.rapidapi.com/v1', options);
  }

}
