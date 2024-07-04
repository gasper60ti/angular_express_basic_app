import { Routes } from '@angular/router';
import { ItemsComponent } from './items/list/items.component';
import { CreateItemComponent } from './items/create/createItem.component';
import { UpdateItemComponent } from './items/update/updateItem.component';
import { OneItemComponent } from './items/one/oneItem.component';

export const routes: Routes = [
  {
    path: 'client',
    component: ItemsComponent,
  },

  {
    path: 'client/create',
    component: CreateItemComponent,
  },

  {
    path: 'client/update/:id',
    component: UpdateItemComponent,
  },

  {
    path: 'client/:id',
    component: OneItemComponent,
  },
];
