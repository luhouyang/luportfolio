import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./modules/activities/activities.module').then(
        (m) => m.ActivitiesModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
];
