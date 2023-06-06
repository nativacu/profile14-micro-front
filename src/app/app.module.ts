import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet } from "@angular/router";
import { ProfileV14Module } from "./profile-v14/profile-v14.module";
import { AppRoutingModule } from "./app-routing.module";
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    ProfileV14Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('profile-v14', ce);
  }
}