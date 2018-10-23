import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {RouterModule} from '@angular/router';

import {BasicelementsComponent} from './basicelements/basicelements.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TypographyComponent} from './typography/typography.component';
import {NucleoiconsComponent} from './nucleoicons/nucleoicons.component';
import {ComponentsComponent} from './components.component';
import {NotificationComponent} from './notification/notification.component';
import {NgbdModalBasic} from './modal/modal.component';
import {SliderComponent} from './slider/slider.component';
import {ModalModule} from 'ng-bootstrap';
import {HomeRangeComponent} from './home-range/home-range.component';
import {OpenContactMapHubComponent} from './open-contact-map-hub/open-contact-map-hub.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        NgbModalModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAR7CyLsAeCwZLfgcaz1BGJR3UmRFKizbc'
        })
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        SliderComponent,
        HomeRangeComponent,
        OpenContactMapHubComponent,
        MapComponent
    ],
    providers: [
        GoogleMapsAPIWrapper
    ],
    exports: [ComponentsComponent, NgbdModalBasic]
})
export class ComponentsModule {
}
