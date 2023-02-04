import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import {AnimesComponent} from './pages/animes/animes.component';
import { SeriesComponent } from './pages/filmes/filmes.component';
import { GamesComponent } from './pages/games/games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

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
    path:'filmes',
    component: SeriesComponent
  },
  {
    path:'games',
    component: GamesComponent
  },
  {path: 'login',
  component: LoginComponent
  },
  {path: 'cadastro',
  component: CadastroComponent
  },
  {path: '404',
  component: NotFoundComponent
  },
  {path: '**',
  redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }