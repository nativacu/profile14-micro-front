import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileV14Component } from './profile-v14.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ProfileV14RoutingModule } from "./profile-v14-routing.module";
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    ProfileV14Component
  ],
  exports: [
    ProfileV14Component
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ProfileV14RoutingModule
  ]
})
export class ProfileV14Module { }
