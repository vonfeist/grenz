import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class JsonReaderService {

  galleryJson = 'assets/content/gallery.json';
  teamJson = 'assets/content/team.json';

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
}
