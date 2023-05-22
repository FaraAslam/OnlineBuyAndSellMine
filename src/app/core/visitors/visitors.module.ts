import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsRoutingModule } from './visitors-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { MatIconModule } from '@angular/material/icon';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    HomeComponent,
    CategoryProductsComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    AngularEditorModule,
    MatRadioModule
  ],
  exports: [
    AddProductComponent,
    CategoryProductsComponent
  ]
})
export class VisitorsModule {
  constructor(){
    console.log("visitors module load")
  }
 }
