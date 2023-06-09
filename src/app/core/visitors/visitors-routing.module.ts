import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VisitorsComponent } from './visitors.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorsComponent,
    //canActivate: [AuthGaardGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product-details/:productId',
        component: ProductDetailsComponent,
      },
      {
        path:'category-products',
        component: CategoryProductsComponent,
      },
      {
        path:'add-product',
        component: AddProductComponent,    
      },
      {
        path:'seller/:userId',
        component: SellerProfileComponent,    
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule {
  
 }
