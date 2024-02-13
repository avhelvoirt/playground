import { Route } from '@angular/router';
import { MainscreenComponent } from './mainscreen.component';

export const COFFEE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainscreenComponent,
      },
    ],
  },
];
