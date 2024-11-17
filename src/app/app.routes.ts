import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-game',
    loadComponent: () => import('./pages/new-game/new-game.page').then( m => m.NewGamePage)
  },
  {
    path: 'initialisation',
    loadComponent: () => import('./pages/initialisation/initialisation.page').then( m => m.InitialisationPage)
  },
];
