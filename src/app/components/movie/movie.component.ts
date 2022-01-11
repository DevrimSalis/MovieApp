import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: any = []
  image_path = 'https://image.tmdb.org/t/p/w500';
  youtube_path = "https://www.youtube.com/watch?v=";
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.contentService.getMovies().subscribe(response => {
      this.movies = response.results;
    })
  }
}