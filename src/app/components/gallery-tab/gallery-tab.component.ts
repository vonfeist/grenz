import {Component, OnInit} from '@angular/core';
import {Lightbox} from 'angular2-lightbox';
import {JsonReaderService} from '../../services/json-reader.service';

export interface GalleryTab {
  title: string;
}

@Component({
  selector: 'app-gallery-tab',
  templateUrl: './gallery-tab.component.html',
  styleUrls: ['./gallery-tab.component.scss']
})
export class GalleryTabComponent implements OnInit {

  public galleryTabs = [];
  public salonAlbum = [];

  constructor(
    private lightbox: Lightbox,
    private jsonService: JsonReaderService) {
  }

  openSalon(index: number): void {
    this.lightbox.open(this.salonAlbum, index);
  }

  ngOnInit() {

    this.jsonService.getGalleryJSON().subscribe(data => {
      this.galleryTabs = data;
    })
  }
}
