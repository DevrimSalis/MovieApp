import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {

  series: any = []
  image_path = 'https://image.tmdb.org/t/p/w500';
  youtube_path = "https://www.youtube.com/watch?v=";
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getTvSeries();
  }

  getTvSeries() {
    this.contentService.getTvSeries().subscribe(response => {
      this.series = response.results;
    })
  }
}