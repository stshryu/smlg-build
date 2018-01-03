import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../exportData/memberList';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

    members = MEMBERS
    memberSorted = {};
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
        this.sortMemberTypes();
        console.log(this.memberSorted);
    }

    sortMemberTypes(): void {
        for(let value of this.memberTypes){
            if(!(value in this.memberSorted)){
                this.memberSorted[value] = [];
            }
            for(let memberEntry of this.members){
                if(memberEntry.type == value){
                    this.memberSorted[value].push(memberEntry);
                }
            }
        }
    }
}
