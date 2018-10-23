import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../../services/json-reader.service';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

    public rangeOptions;

    constructor(private jsonService: JsonReaderService) {
    }

    ngOnInit() {
        this.jsonService.getOffer().subscribe(data => {
            this.rangeOptions = data;
        })
    }

}
