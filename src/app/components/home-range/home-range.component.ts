import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-range',
    templateUrl: './home-range.component.html',
    styleUrls: ['./home-range.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRangeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
