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
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
      },
    ],
  },
];
