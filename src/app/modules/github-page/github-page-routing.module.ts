import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhPageComponent } from './gh-page/gh-page.component';

const routes: Routes = [
  {
    path: '',
    component: GhPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubPageRoutingModule {}
