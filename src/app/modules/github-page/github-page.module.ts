import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubPageRoutingModule } from './github-page-routing.module';
import { GhPageComponent } from './gh-page/gh-page.component';


@NgModule({
  declarations: [
    GhPageComponent
  ],
  imports: [
    CommonModule,
    GithubPageRoutingModule
  ]
})
export class GithubPageModule { }
