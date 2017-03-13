import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SignupUser } from './signup.user';
import { CommonUtil } from '../../common/common.util';

@Injectable()
export class SignupService {

    private resourcePath = "/signup";

    constructor( private http: Http ) { }

    signup( user: SignupUser ): Observable<SignupUser[]> {

        let headers = new Headers( { 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers: headers });

        return this.http.post( CommonUtil.API_ENDPOINT + this.resourcePath, user, options )
            .map(( res: Response ) => res.json() )
            .catch(
            ( error: any ) => Observable.throw( error.json().message || 'Server error' )
            );
    }

}
