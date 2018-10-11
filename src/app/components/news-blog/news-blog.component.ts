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
        icon: 'success',
        topic: 'Neuerung',
        title: 'Unser Webseiten Relaunch',
        text: 'Seid über 20 Jahren zaubern wir nun schon außergewöhnliche Frisuren mit Ihnen. Immer am Puls der Zeit bilden wir\n' +
          'uns stetig für Sie weiter und hoffen Sie auch in Zukunft bei uns begrüßen zu können. Aus diesem Anlass haben wir unseren\n' +
          'Internetauftritt erneuert. Hier finden sie Informationen über unseren Laden, können sich inspirieren lassen oder uns über\n' +
          'die Kontaktform kontaktieren. Wir wünschen Ihnen viel Spaß mit unserer Webseite.',
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
