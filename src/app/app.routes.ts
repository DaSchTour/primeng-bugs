import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'picklist',
  loadComponent: () => import('./picklist/picklist.component').then(m => m.PicklistComponent)
}];
