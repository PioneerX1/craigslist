import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'categories/:categoryId',
    component: ListingComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
