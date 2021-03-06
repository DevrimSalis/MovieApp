import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  trends: any = []
  image_path = 'https://image.tmdb.org/t/p/w500';
  youtube_path = "https://www.youtube.com/watch?v=";
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getTrends();
  }

  getTrends() {
    this.contentService.getTrends().subscribe(response => {
      this.trends = response.results;
    })
  }
}
