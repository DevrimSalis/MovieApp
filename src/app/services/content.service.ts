import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  apiKey = '';
  language = '&language=tr-TR';
  baseUrl = 'https://api.themoviedb.org/3';
  apiUrl = this.baseUrl + '/discover/movie?sort_by=popularity.desc&' + this.apiKey + this.language;

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
