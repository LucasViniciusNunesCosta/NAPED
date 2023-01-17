import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'noticia',
    component: NoticiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }