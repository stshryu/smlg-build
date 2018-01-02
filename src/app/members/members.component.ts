import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../exportData/memberList';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

    members = MEMBERS;
    memberTypes = {};

    constructor() { }

    ngOnInit() {
        this.getMemberTypes();
    }

    getMemberTypes(): void {
        for(var value of this.members){
            console.log(value);
        }
    }
}
