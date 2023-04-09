import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component'
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ProductsComponent,
    VisitorListComponent,
    CategoriesComponent,
    ProfileComponent,
    DashboardChartComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class DashboardModule { 
}
