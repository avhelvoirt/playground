import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/routes').then((mod) => mod.AUTH_ROUTES),
      },
      {
        path: 'mainscreen',
        loadChildren: () =>
          import('./mainscreen/routes').then((mod) => mod.MAINSCREEN_ROUTES),
      },
      {
        path: 'recipes',
        loadChildren: () =>
          import('./recipes/routes').then((mod) => mod.RECIPES_ROUTES),
      },
    ],
  },
];
