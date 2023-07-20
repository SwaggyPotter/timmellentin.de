import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsUniverseComponent } from './cats-universe/cats-universe.component';
import { HistoryLinkComponent } from './history-link/history-link.component';
import { PicturesComponent } from './pictures/pictures.component';
import { SliderShowComponent } from './slider-show/slider-show.component';

const routes: Routes = [
  { path: '', component: SliderShowComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'history-link', component: HistoryLinkComponent },
  { path: 'cats-universe', component: CatsUniverseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
