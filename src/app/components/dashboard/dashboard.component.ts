import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component( {
    selector: 'dashboard',
    template: require( './dashboard.html' ),
    styleUrls: ['./dashboard.scss'],
    providers: [
      DashboardService
    ]
})
export class DashboardComponent implements OnInit {

    constructor( private dashboardService: DashboardService ) { }

    ngOnInit() {
        //Empty
    }
}
