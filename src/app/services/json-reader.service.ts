import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JsonReaderService {

    galleryJson = 'assets/content/gallery.json';
    teamJson = 'assets/content/team.json';
    rangeJson = 'assets/content/range.json';
    offerJson = 'assets/content/offer.json';

    constructor(private http: HttpClient) {
        this.getGallery().subscribe(data => {
            console.log(data);
        })
    }

    getGallery() {
        return this.http.get(this.galleryJson);
    }

    getTeam() {
        return this.http.get(this.teamJson);
    }

    getOffer() {
        return this.http.get(this.offerJson);
    }

    getRange() {
        return this.http.get(this.offerJson);
    }
}
