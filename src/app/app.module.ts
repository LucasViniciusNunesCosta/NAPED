import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardNewComponent } from './components/cards/card-base/card-base.component';
import { NoticiasRecentesComponent } from './components/noticias-recentes/noticias-recentes.component';
import { CardLongComponent } from './components/cards//card-long/card-long.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasPrincipaisComponent } from './pages/home/noticias-principais/noticias-principais.component';
import { NoticiasCentraisComponent } from './pages/home/noticias-centrais/noticias-centrais.component';
import { NoticiasLateraisComponent } from './pages/home/noticias-laterais/noticias-laterais.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { HeaderNoticiaComponent } from './pages/noticia/header-noticia/header-noticia.component';
import { NoticiaBannerComponent } from './pages/noticia/noticia-banner/noticia-banner.component';
import { AnimesComponent } from './pages/animes/animes.component';
import { AnimeBannerComponent } from './components/secao-banner/secao-banner.component';
import { AnimeSearchComponent } from './components/secao-search/secao-search.component';
import { AnimeCatalogoComponent } from './components/secao-catalogo/secao-catalogo.component';
import { SeriesComponent } from './pages/series/series.component';
import { GamesComponent } from './pages/games/games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    CardNewComponent,
    NoticiasRecentesComponent,
    CardLongComponent,
    HomeComponent,
    NoticiasPrincipaisComponent,
    NoticiasCentraisComponent,
    NoticiasLateraisComponent,
    NoticiaComponent,
    HeaderNoticiaComponent,
    NoticiaBannerComponent,
    AnimesComponent,
    AnimeBannerComponent,
    AnimeSearchComponent,
    AnimeCatalogoComponent,
    SeriesComponent,
    GamesComponent,
    NotFoundComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
