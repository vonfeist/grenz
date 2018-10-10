import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.scss']
})
export class NewsBlogComponent implements OnInit {

  public newsEntries = [];

  constructor() { }

  ngOnInit() {

    this.newsEntries = [
      {
        icon: 'info',
        topic: 'Topic',
        title: 'A title',
        text: 'Whatever comes up',
        image: 'assets/img/eva.jpg',
        date: '18.Oktober 2018',
        author: 'Katrin Grenz'
      },
      {
        icon: 'danger',
        topic: 'Topic',
        title: 'A title',
        text: 'Whatever comes up',
        image: 'assets/img/eva.jpg',
        date: '18.Oktober 2018',
        author: 'Katrin Grenz'
      },
      {
        icon: 'success',
        topic: 'Topic',
        title: 'A title',
        text: 'Whatever comes up',
        image: 'assets/img/eva.jpg',
        date: '18.Oktober 2018',
        author: 'Katrin Grenz'
      },
      {
        icon: 'info',
        topic: 'Topic',
        title: 'A title',
        text: 'Whatever comes up',
        image: 'assets/img/eva.jpg',
        date: '18.Oktober 2018',
        author: 'Katrin Grenz'
      },
    ]
  }

}
