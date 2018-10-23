import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

    public rangeOptions = [
        {
            image: 'assets/img/bg4.jpg',
            text: 'Neben klassischen Haarschnitten für die Dame und den Herren bieten wir folgende Spezialhaarschnitte an:',
            list: [
                'Messerhaarschnitte ',
                'Undercuts',
                'Flat- und Iroschnitte',
                'Splisshaarschnitte (auf Wunsch auch mit heißer Schere)',
            ],
            linkText: 'Zu unseren Haarschnitte',
            links: 'gallerie#schnitte',
            header: 'Haarschnitte',
        },
        {
            image: 'assets/img/bg4.jpg',
            text: 'Für eure Haare bieten wir:\n',
            list: [
                'klassische Färbung (Globalfärbung)',
                'Coloration (auch ohne Ammoniak) ',
                'Intensivtönung',
                'Glossing (Auffrischung von Coloration, Optimierung der Haarfarbe)',
            ],
            linkText: 'Zu unseren Färbungen',
            links: 'gallerie#farbe',
            header: 'Haarfarben'
        },
        {
            image: 'assets/img/bg4.jpg',
            text: 'Bei unseren Farbkreationen sind keine Grenzen gesetzt, wir bieten:',
            list: [
                'verschiedene Folientechniken',
                'Kammsträhnen',
                'Haubensträhnen',
                'Balayage',
                'Strähnen mit dem Colorboard',
            ],
            linkText: 'Zu unseren Farbkreationen',
            links: 'gallerie#straehnchen',
            header: 'Strähnchen-Techniken',
        },
        {
            image: 'assets/img/bg4.jpg',
            text: 'Volumen- oder doch eine Dauerwelle? Wir bieten an:',
            list: ['Alkalische Dauerwelle (klassisch)', 'Spezialdauerwelle (Neutralwelle)'],
            linkText: 'Zu unseren Umformungen',
            links: 'gallerie#umformung',
            header: 'Umformung'
        },
        {
            image: 'assets/img/bg4.jpg',
            text: '\'Wir arbeiten seit über 18 Jahren Echthaarsträhnen mit dem Original von Greath Lengths ein. Dabei bieten wir für unsere Haarverlängerungen bzw. Haarverdichtungen verschiedene Techniken an:',
            list: [
                'Standardsystem',
                'Multisonic System',
            ],
            linkText: 'Zu unseren Haarverlängerungen',
            links: 'gallerie#lang',
            header: 'Haarverlängerungen'
        },
        {
            image: 'assets/img/bg4.jpg',
            text: 'Wir bieten euch neben dem Standardangebot folgende Zusatzleistungen:',
            list: [
                'Make-up',
                'Augenbrauen zupfen, färben, formen',
                'Wimpernwelle und färben',
                'Hausbesuche (im näheren Umkreis auf Anfrage)',
                'Steckfrisuren (Jugendweihe, Hochzeit, Abiball) uvm.',
            ],
            linkText: 'Zu unseren Zusatzleistungen',
            links: 'gallerie#zusatz',
            header: 'Zusatzleistungen'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
