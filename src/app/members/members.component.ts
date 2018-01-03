import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../exportData/memberList';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

    members = MEMBERS;
    memberTypes = [];

    constructor() { }

    ngOnInit() {
        this.getMemberTypes();
    }

    getMemberTypes(): void {
        let tempTypes = new Set();
        for(let value of this.members){
            tempTypes.add(value.type);
        }
        this.memberTypes = Array.from(tempTypes);
    }
}
