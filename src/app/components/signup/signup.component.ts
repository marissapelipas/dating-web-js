import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupUser } from './signup.user';
import { SignupService } from './signup.service';
import { ValidationService } from '../../common/validation.service';

@Component( {
    selector: 'signup',
    template: require( './signup.html' ),
    providers: [
        SignupService
    ]
})
export class SignupComponent implements OnInit {

    userForm: FormGroup;
    user: SignupUser; 

    constructor( private formBuilder: FormBuilder, private router: Router, private signupService: SignupService ) {
        this.userForm = formBuilder.group( {
            "nickname": ["", Validators.required],
            "password": ["", [Validators.compose( [Validators.required, ValidationService.passwordValidator] )]],
            "email": ["", [Validators.compose( [Validators.required, ValidationService.emailValidator] )]]
        });
    }

    ngOnInit() {
        this.user = new SignupUser();
        this.user.password = "";
        this.user.email = "";
        this.user.nickname = "";
    }

    onSubmit() {
        console.log( "User Info: " + this.user );
        this.signupService.signup( this.user ).subscribe(
            user => {
                console.log( "user: " + user );
            },
            err => {
                console.log( err );
                if ( err == "duplicateEmail" ) {
                    this.userForm.controls["email"].setErrors( { duplicateEmail: err });
                } 

            });
    }

    onSignin() {
        this.router.navigate( ['/login'] );
    }
}

