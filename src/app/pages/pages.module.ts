import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {AgmCoreModule} from '@agm/core';

import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {PagesComponent} from './pages.component';

import {TeamCardComponent} from '../components/team-card/team-card.component';
import {TeamPageComponent} from './team/team.component';
import {NewsComponent} from './news/news.component';
import {ImpressumComponent} from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryTabComponent} from '../components/gallery-tab/gallery-tab.component';
import {OffersComponent} from './offers/offers.component';
import {RangeComponent} from '../components/range/range.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    PagesComponent,
    ProfileComponent,
    TeamCardComponent,
    TeamPageComponent,
    NewsComponent,
    ImpressumComponent,
    DatenschutzComponent,
    GalleryComponent,
    GalleryTabComponent,
    OffersComponent,
    RangeComponent,
  ]
})
export class PagesModule {
}
