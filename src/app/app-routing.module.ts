import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvseriesComponent } from './components/tvseries/tvseries.component';

const routes: Routes = [
  {path: "", component: ContentComponent},
  {path: "movies", component: MovieComponent},
  {path: "tvseries", component: TvseriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
