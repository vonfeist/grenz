import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {

  @ViewChild('carousel') carousel: any;

  constructor(carouselConfig: NgbCarouselConfig) {
    carouselConfig.keyboard = true;
  }

  ngOnInit() {
  }

}
