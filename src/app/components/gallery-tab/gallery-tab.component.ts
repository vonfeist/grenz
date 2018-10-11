import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-gallery-tab',
  templateUrl: './gallery-tab.component.html',
  styleUrls: ['./gallery-tab.component.scss']
})
export class GalleryTabComponent implements OnInit {

  public galleryTabs = [];

  constructor() {
  }

  ngOnInit() {

    this.galleryTabs = [
      {
        title: 'Unser Friseursalon',
        images: ['assets/img/gallery/friseursalon/salon_1.jpg', 'assets/img/gallery/friseursalon/salon_14.jpg', 'assets/img/gallery/friseursalon/salon_27.jpg',
          'assets/img/gallery/friseursalon/salon_2.jpg', 'assets/img/gallery/friseursalon/salon_15.jpg', 'assets/img/gallery/friseursalon/salon_28.jpg',
          'assets/img/gallery/friseursalon/salon_3.jpg', 'assets/img/gallery/friseursalon/salon_16.jpg', 'assets/img/gallery/friseursalon/salon_29.jpg',
          'assets/img/gallery/friseursalon/salon_4.jpg', 'assets/img/gallery/friseursalon/salon_17.jpg', 'assets/img/gallery/friseursalon/salon_30.jpg',
          'assets/img/gallery/friseursalon/salon_5.jpg', 'assets/img/gallery/friseursalon/salon_18.jpg', 'assets/img/gallery/friseursalon/salon_31.jpg',
          'assets/img/gallery/friseursalon/salon_6.jpg', 'assets/img/gallery/friseursalon/salon_19.jpg', 'assets/img/gallery/friseursalon/salon_32.jpg',
          'assets/img/gallery/friseursalon/salon_7.jpg', 'assets/img/gallery/friseursalon/salon_20.jpg', 'assets/img/gallery/friseursalon/salon_33.jpg',
          'assets/img/gallery/friseursalon/salon_8.jpg', 'assets/img/gallery/friseursalon/salon_21.jpg', 'assets/img/gallery/friseursalon/salon_34.jpg',
          'assets/img/gallery/friseursalon/salon_9.jpg', 'assets/img/gallery/friseursalon/salon_22.jpg', 'assets/img/gallery/friseursalon/salon_35.jpg',
          'assets/img/gallery/friseursalon/salon_10.jpg', 'assets/img/gallery/friseursalon/salon_23.jpg', 'assets/img/gallery/friseursalon/salon_36.jpg',
          'assets/img/gallery/friseursalon/salon_11.jpg', 'assets/img/gallery/friseursalon/salon_24.jpg', 'assets/img/gallery/friseursalon/salon_37.jpg',
          'assets/img/gallery/friseursalon/salon_12.jpg', 'assets/img/gallery/friseursalon/salon_25.jpg', 'assets/img/gallery/friseursalon/salon_38.jpg',
          'assets/img/gallery/friseursalon/salon_13.jpg', 'assets/img/gallery/friseursalon/salon_26.jpg', 'assets/img/gallery/friseursalon/salon_39.jpg'],
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
