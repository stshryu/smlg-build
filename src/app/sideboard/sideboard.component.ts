import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-sideboard',
    templateUrl: './sideboard.component.html',
    styleUrls: ['./sideboard.component.css']
})
export class SideboardComponent implements OnInit {
    @Input() isShowing: boolean;
    @HostBinding('class.is-showing') get enabled() {
        return this.isShowing;
    }

    constructor() { }

    ngOnInit() {
    }

}
