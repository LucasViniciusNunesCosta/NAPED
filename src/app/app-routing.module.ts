import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import {AnimesComponent} from './pages/animes/animes.component';
import { SeriesComponent } from './pages/series/series.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'noticia',
    component: NoticiaComponent
  },
  {
    path:'animes',
    component: AnimesComponent
  },
  {
    path:'series',
    component: SeriesComponent
  },
  {
    path:'games',
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }