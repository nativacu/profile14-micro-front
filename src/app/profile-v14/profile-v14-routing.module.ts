import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileV14Component } from "./profile-v14.component";

const routes: Routes = [
  { path: '', component: ProfileV14Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileV14RoutingModule { }
