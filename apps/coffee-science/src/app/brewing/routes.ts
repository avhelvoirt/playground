import { Route } from '@angular/router';
import { AddBrewingComponent } from './components/add-brewing.component';

export const BREWING_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AddBrewingComponent,
      },
    ],
  },
];
