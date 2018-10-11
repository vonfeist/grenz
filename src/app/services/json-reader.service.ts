import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class JsonReaderService {

  constructor(private http: HttpClient) {
    this.getGalleryJSON().subscribe(data => {
      console.log(data)
    });
  }

  public getGalleryJSON(): Observable<any> {
    return this.http.get("assets/content/gallery.json")
  }
}
