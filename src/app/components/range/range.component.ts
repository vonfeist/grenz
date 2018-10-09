import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  public rangeOptions = [
    {
      image: 'assets/img/bg4.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n' +
        '        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
        '        accusam et justo duo dolores et ea rebum.\n' +
        '        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      linkText: 'Unsere Haarverlängerungen',
      links: 'gallerie#lang',
      header: 'Overall Test 1',
    },
    {
      image: 'assets/img/bg4.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n' +
        '        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
        '        accusam et justo duo dolores et ea rebum.\n' +
        '        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      linkText: 'Unsere Haarverlängerungen 2',
      links: 'gallery#lang',
      header: 'Overall Test 2'
    },
    {
      image: 'assets/img/bg4.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n' +
        '        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
        '        accusam et justo duo dolores et ea rebum.\n' +
        '        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      linkText: 'Unsere Haarverlängerungen',
      links: 'gallery#lang',
      header: 'Overall Test 1',
    },
    {
      image: 'assets/img/bg4.jpg',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n' +
        '        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
        '        accusam et justo duo dolores et ea rebum.\n' +
        '        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      linkText: 'Unsere Haarverlängerungen 2',
      links: 'gallery#lang',
      header: 'Overall Test 2'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
