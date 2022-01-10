import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  image_path = 'https://image.tmdb.org/t/p/w500';

  sliderMovie: any = []
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSliderMovie();
  }

  getSliderMovie() {
    this.contentService.getMovies().subscribe(response => {
      this.sliderMovie = response.results.slice(0, 1);
      console.log(this.sliderMovie);

    })
  }
}
