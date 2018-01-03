import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() infoShowing: boolean = false;
    @Output() infoShowingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {

    }

    public toggleInfoShowing(){
        this.infoShowing = !this.infoShowing;
        this.infoShowingChange.emit(this.infoShowing);
    }

}
