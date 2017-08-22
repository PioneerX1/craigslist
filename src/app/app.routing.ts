import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'categories/:categoryId',
    component: ListingComponent
  },
  {
    path: 'categories/:categoryId/listings/:listingId',
    component: DetailsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
