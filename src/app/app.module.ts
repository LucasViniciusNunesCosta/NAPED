import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardNewComponent } from './components/card-new/card-new.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { NoticiasRecentesComponent } from './components/noticias-recentes/noticias-recentes.component';
import { CardLongComponent } from './components/card-long/card-long.component';
import { HomeComponent } from './pages/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
