import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
