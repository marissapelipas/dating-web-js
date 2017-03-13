import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/index';
import { AuthenticationService } from '../../authentication/index';

@Component( {
    selector: 'login',
    template: require( './login.html' )
})
export class LoginComponent implements OnInit {

    user: User;
    loading = false;
    error = '';

    constructor( private router: Router, private authenticationService: AuthenticationService ) { }

    ngOnInit() {
        this.user = new User();
        this.user.username = "";
        this.user.password = "";
    }

    //    onSubmit() {
    //        console.log( "username: " + this.user.username );
    //        console.log( "password: " + this.user.password );
    //        this.authenticationService.login( this.user ).subscribe(
    //            auth => {
    //                console.log( auth );
    //            },
    //            err => {
    //                console.log( err );
    //            });
    //    }

    onSubmit() {
        this.loading = true;
        this.authenticationService.login( this.user )
            .subscribe( result => {
                if ( result === true ) {
                    this.router.navigate( ['/'] );
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

    onSignup() {
        this.router.navigate( ['/signup'] );
    }
}

