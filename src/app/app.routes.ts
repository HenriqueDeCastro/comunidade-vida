import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'colabore',
    loadComponent: () => import('./pages/cooperate/cooperate.component').then(m => m.CooperateComponent)
},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];
