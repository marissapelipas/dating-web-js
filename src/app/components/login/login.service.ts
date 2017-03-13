import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../../model/user';
import { CommonUtil } from '../../common/common.util';

@Injectable()
export class LoginService {

    private resourcePath = "/signup";

    constructor( private http: Http ) { }

    login( user: User ): Observable<User[]> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        let options = new RequestOptions( { headers: headers });

        var creds = 'username=' + user.username + '&password=' + user.password;
        
        
        
        return this.http.post( CommonUtil.API_ENDPOINT + this.resourcePath, creds, options )
            .map(( res: Response ) => res.json() )
            .catch(( error: any ) => Observable.throw( error.json().error || 'Server error' ) );
    }


    forgotPassword( username: string ): void {

    }

}
