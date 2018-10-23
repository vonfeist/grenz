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
        text: 'Seid über 20 Jahren zaubern wir nun schon außergewöhnliche Frisuren mit Euch. Immer am Puls der Zeit bilden wir\n' +
          'uns stetig für euch weiter und hoffen euch auch in Zukunft bei uns begrüßen zu können. Aus diesem Anlass haben wir unseren\n' +
          'Internetauftritt erneuert. Hier findet ihr Informationen über unseren Laden, könnt euch inspirieren lassen oder uns über\n' +
          'die Kontaktform kontaktieren. Wir wünschen euch viel Spaß mit unserer Webseite.',
        image: 'assets/img/gallery/news-1.jpg',
        date: '23.Oktober 2018',
        author: 'Katrin Grenz'
      },
    ]
  }

}
