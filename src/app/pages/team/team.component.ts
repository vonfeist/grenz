import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamPageComponent implements OnInit, OnDestroy {
  data: Date = new Date();
  focus;

  constructor() {
  }

  ngOnInit() {

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('team-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
