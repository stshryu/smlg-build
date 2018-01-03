import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideboardComponent } from './sideboard/sideboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MembersComponent,
        ContactComponent,
        SideboardComponent,
        HeaderComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
