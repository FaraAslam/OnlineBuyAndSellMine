import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserModule { }
