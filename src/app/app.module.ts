import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CardBigComponent } from './card-big/card-big.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { CardLongComponent } from './card-long/card-long.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    CardNewComponent,
    CardBigComponent,
    NoticiasRecentesComponent,
    CardLongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
