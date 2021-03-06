import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';

import {PagesComponent} from './pages.component';

import {TeamCardComponent} from '../components/team-card/team-card.component';
import {TeamPageComponent} from './team/team.component';
import {NewsComponent} from './news/news.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleryTabComponent} from '../components/gallery-tab/gallery-tab.component';
import {OffersComponent} from './offers/offers.component';
import {RangeComponent} from '../components/range/range.component';
import {ContactComponent} from './contact/contact.component';
import {ContactFormComponent} from '../components/contact-form/contact-form.component';
import {NewsBlogComponent} from '../components/news-blog/news-blog.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
    ],
    declarations: [
        PagesComponent,
        TeamCardComponent,
        TeamPageComponent,
        NewsComponent,
        ImpressumComponent,
        DatenschutzComponent,
        GalleryComponent,
        GalleryTabComponent,
        OffersComponent,
        RangeComponent,
        ContactComponent,
        ContactFormComponent,
        NewsBlogComponent,
    ]
})
export class PagesModule {
}
