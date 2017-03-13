import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing, routedComponents, appRoutingProviders } from './app.routes';
import { AuthenticationService } from './authentication/index';

import { AppComponent } from './app.component' 

@NgModule({
  declarations: [
    routedComponents
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing
  ], 
  exports: [RouterModule],

  providers: [
     appRoutingProviders,
     AuthenticationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
