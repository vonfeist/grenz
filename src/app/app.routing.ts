import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components/components.component';
import {LandingComponent} from './pages/landing/landing.component';
import {LoginComponent} from './pages/login/login.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import {TeamPageComponent} from './pages/team/team.component';
import {NewsComponent} from './pages/news/news.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {OffersComponent} from './pages/offers/offers.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: ComponentsComponent},
  {path: 'nucleoicons', component: NucleoiconsComponent},
  {path: 'examples/landing', component: LandingComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'news', component: NewsComponent},
  {path: 'examples/login', component: LoginComponent},
  {path: 'gallerie', component: GalleryComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'leistungen', component: OffersComponent},
  {path: 'kontakt', component: ContactComponent},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule {
}
