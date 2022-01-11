import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentComponent } from './components/content/content.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvseriesComponent } from './components/tvseries/tvseries.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    MovieComponent,
    TvseriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
