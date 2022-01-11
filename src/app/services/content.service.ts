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
  movieApiUrl = this.baseUrl + '/discover/movie?sort_by=popularity.desc&' + this.apiKey + this.language;
  tvSeriesApiUrl = this.baseUrl + '/discover/tv?sort_by=popularity.desc&' + this.apiKey + this.language;
  trendApiUrl = this.baseUrl + '/trending/all/day?sort_by=popularity.desc&' + this.apiKey + this.language

  constructor(private httpClient: HttpClient) { }


  getTrends(): Observable<any>{
    return this.httpClient.get(this.trendApiUrl);
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.movieApiUrl);
  }

  getTvSeries(): Observable<any> {
    return this.httpClient.get(this.tvSeriesApiUrl);
  }
}
