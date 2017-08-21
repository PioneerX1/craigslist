import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
