import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./auth/routes').then((mod) => mod.AUTH_ROUTES),
      },
      {
        path: 'mainscreen',
        loadChildren: () =>
          import('./mainscreen/routes').then((mod) => mod.MAINSCREEN_ROUTES),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
      },
    ],
  },
];
