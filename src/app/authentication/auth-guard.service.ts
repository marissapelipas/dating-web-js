import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private router: Router ) { }

    canActivate() {
        if ( localStorage.getItem( 'currentUser' ) ) {
            // logged in so return true
            return true;
        }
        //Call the service that would authenticate the JWT token here and return true if there is a valid token.
        //return true;
        this.router.navigate( ['/login'] );
        return false;
    }

}
