import { Component, OnInit } from '@angular/core';
import {JsonReaderService} from '../../services/json-reader.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  public teamOptions;

  constructor(private jsonService: JsonReaderService) { }

  ngOnInit() {
   this.jsonService.getTeam().subscribe(data => {
     this.teamOptions = data;
   })
  }

}
