import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { EditProductComponent } from './user-product/edit-product/edit-product.component';
import { ProductsComponent } from './user-product/products/products.component';
import { UserProductComponent } from './user-product/user-product.component';
import { UserProfileComponent } from './user-product/user-profile/user-profile.component';
import { UserProductsComponent } from './core/user/user-products/user-products.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/visitors/visitors.module').then(mod => mod.VisitorsModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./core/user/user.module').then(mod => mod.UserModule)
  },
 //{
// path: 'user',
// children:[
//   {path:'.core/userproduct', component:UserProductsComponent},
//   {path:'.core/userprofile', component:UserProfileComponent},
//   {path:'.core/editproduct', component:EditProductComponent},
// ]
//  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'userProduct',
  //   component: UserProductComponent
  // },
  // {
  //   path: 'product',
  //   component: ProductsComponent
  // },
  // {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // },
  //  {
  //   path: 'editproduct',
  //   component: EditProductComponent
  // },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
