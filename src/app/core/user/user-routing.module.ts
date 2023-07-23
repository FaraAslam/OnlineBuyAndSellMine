import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'',
component:UserComponent,
children:[
  { 
    path:'userproduct',
     component:UserProductsComponent
    },
  {
    path:'userprofile',
     component:UserProfileComponent
    },
  {
    path:'editproduct',
     component:EditProductComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
