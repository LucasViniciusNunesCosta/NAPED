import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardNewComponent } from './components/cards/card-small/card-small.component';
import { CardBigComponent } from './components/cards//card-big/card-big.component';
import { NoticiasRecentesComponent } from './components/noticias-recentes/noticias-recentes.component';
import { CardLongComponent } from './components/cards//card-long/card-long.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasPrincipaisComponent } from './components/noticias-principais/noticias-principais.component';
import { NoticiasCentraisComponent } from './components/noticias-centrais/noticias-centrais.component';
import { NoticiasLateraisComponent } from './components/noticias-laterais/noticias-laterais.component';
import { CardMediumComponent } from './components/cards/card-medium/card-medium.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { HeaderNoticiaComponent } from './components/header-noticia/header-noticia.component';
import { NoticiaBannerComponent } from './components/noticia-banner/noticia-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    CardNewComponent,
    CardBigComponent,
    NoticiasRecentesComponent,
    CardLongComponent,
    HomeComponent,
    NoticiasPrincipaisComponent,
    NoticiasCentraisComponent,
    NoticiasLateraisComponent,
    CardMediumComponent,
    NoticiaComponent,
    HeaderNoticiaComponent,
    NoticiaBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
