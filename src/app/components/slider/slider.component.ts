import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SliderComponent implements OnInit {

  @ViewChild('carousel') carousel: any;

  constructor(carouselConfig: NgbCarouselConfig) {
    carouselConfig.keyboard = true;
  }

  ngOnInit() {
  }

}
