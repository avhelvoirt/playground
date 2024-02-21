import { Route } from '@angular/router';
import { AddRecipesComponent } from './components/add-recipes.component';

export const RECIPES_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AddRecipesComponent,
      },
    ],
  },
];
