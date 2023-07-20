import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderShowComponent } from './slider-show/slider-show.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HistoryLinkComponent } from './history-link/history-link.component';
import { CatsUniverseComponent } from './cats-universe/cats-universe.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderShowComponent,
    HeaderMenuComponent,
    PicturesComponent,
    HistoryLinkComponent,
    CatsUniverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
