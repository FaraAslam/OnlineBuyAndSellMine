import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    //canActivate: [AuthGaardGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
       },
      {
        path: 'dashboard',
        component: DashboardChartComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'visitor-list',
        component: VisitorListComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
 }
