import { Component, OnInit } from '@angular/core';
import { CONTACT } from '../exportData/contactInfo';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactInfo = CONTACT;

    constructor() { }

    ngOnInit() {
    }

}
