import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthComponent,
      },
    ],
  },
];
