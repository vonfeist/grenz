import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  public teamOptions = [];

  constructor() { }

  ngOnInit() {
    this.teamOptions = [
        {
            id: '1',
            name: 'Katrin Grenz',
            image: 'http://via.placeholder.com/150x200',
            position: 'Friseurmeisterin und Inhaberin',
            text: 'Gründerin des Friseursalons und immer für flippige Messerhaarschnitte, ' +
            'Herrenhaarschnitte sowie Flatt- Haarschnitte, – Haarverlängerungen und Verdichtungen ' +
            'mit Haaren vom Original Great Lengths zu haben.',
        },
        {
            id: '2',
            name: 'Josefin Jaskula',
            image: 'http://via.placeholder.com/150x200',
            position: 'Unser großes Multitalent',
            text: 'Neben Herrenhaarschnitten, Dauerwellen und Farbveränderungen ' +
            'kann Josie auch Haarverlängerungen einarbeiten, mit der heißen Schere arbeiten und beseitigt Spliss.' +
            'Außerdem hat sie ein Händchen für die kleinsten Friseurbesucher. Sie ist quasi unser kleines Multitalent. ',
        },
        {
            id: '3',
            name: 'Melanie Kressin',
            image: 'http://via.placeholder.com/150x200',
            position: 'Powerfrau mit viel Herz',
            text: 'Sie kreiert tolle Haarfarben mit und ohne Highlights sowie Strähnen in verschiedensten Techniken. ' +
            'Herrenhaarschnitte (auch Bärte) sowie extreme Sidecut-Varianten oder ausrasierte Scheitel gehören zu ihrem Angebot.' +
             'Also für jeden das Passende. Auch Kinder und Teenies werden von ihr sehr einfühlsam beraten und bedient.',
        },
        {
            id: '4',
            name: 'Claudia Nitzschke',
            image: 'http://via.placeholder.com/150x200',
            position: 'Unsere Azubine',
            text: 'Sie ist seit 2016 bei uns und ist mittlerweile im dritten Lehrjahr, also mittlerweile ein starkes Mitglied' +
            'unseres Teams. Insbesondere Hochsteckfrisuren und Flechtelemente gehören zu ihrem Spezielgebiet.',
        },
    ];
  }

}
