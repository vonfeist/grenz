import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery-tab',
  templateUrl: './gallery-tab.component.html',
  styleUrls: ['./gallery-tab.component.scss']
})
export class GalleryTabComponent implements OnInit {

  public galleryTabs = [];

  constructor() { }

  ngOnInit() {

    this.galleryTabs = [
      {
        title: 'Kurzhaarfrisuren',
        images: ['assets/img/bg1.jpg', 'assets/img/bg1.jpg', 'assets/img/bg8.jpg', 'assets/img/bg8.jpg'],
        id: 'kurz'
        },
      {
        title: 'Kurzhaarfrisuren',
        images: ['assets/img/bg1.jpg', 'assets/img/bg1.jpg', 'assets/img/bg8.jpg', 'assets/img/bg8.jpg'],
        id: 'lang'
      },
      {
        title: 'Kurzhaarfrisuren',
        images: ['assets/img/bg1.jpg', 'assets/img/bg1.jpg', 'assets/img/bg8.jpg', 'assets/img/bg8.jpg'],
        id: 'hoch'
      },
      {
        title: 'Kurzhaarfrisuren',
        images: ['assets/img/bg1.jpg', 'assets/img/bg1.jpg', 'assets/img/bg8.jpg', 'assets/img/bg8.jpg'],
        id: 'runter'
      },
      {
        title: 'Kurzhaarfrisuren',
        images: ['assets/img/bg1.jpg', 'assets/img/bg1.jpg', 'assets/img/bg8.jpg', 'assets/img/bg8.jpg'],
        id: 'links'
      }
    ]
  }

}
