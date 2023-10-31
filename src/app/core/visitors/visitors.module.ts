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
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    CategoriesComponent,
    WishlistComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    AngularEditorModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
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
