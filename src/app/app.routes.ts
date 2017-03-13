import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './authentication/index';

import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/index';
import { DashboardComponent } from './components/dashboard/index';
import { SignupComponent } from './components/signup/index';
import { ControlMessagesComponent } from './common/control-messages.component';
import { ValidationService } from './common/validation.service';


const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routedComponents: any[] = [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    ControlMessagesComponent
];

export const routing = RouterModule.forRoot( appRoutes );
