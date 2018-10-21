import {Component, OnInit, Input, ViewChild, NgZone} from '@angular/core';
import {MapsAPILoader, AgmMap} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services';

declare var google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

interface Location {
    lat: number;
    lng: number;
    zoom: number;
    marker?: Marker;
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit {

    geocoder: any;
    public location: Location = {
        lat: 52.555984,
        lng: 13.5587456,
        marker: {
            lat: 52.555984,
            lng: 13.5587456,
            draggable: false,
            label: 'Friseursalon Grenz'
        },
        zoom: 18
    };

    @ViewChild(AgmMap) map: AgmMap;

    constructor(public mapsApiLoader: MapsAPILoader,
                private zone: NgZone,
                private wrapper: GoogleMapsAPIWrapper) {
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
        });
    }

    ngOnInit() {
        this.location.marker.draggable = true;
    }

}
