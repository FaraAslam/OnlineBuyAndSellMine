import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VisitorsComponent } from './visitors.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { AdminGuard } from 'src/app/services/auth-gaard.guard';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ChatComponent } from './chat/chat.component';

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
        path:'category-products/:categoryId/:subCategory',
        component: CategoryProductsComponent,
      },
      {
        canActivate: [AdminGuard],
        path:'add-product',
        component: AddProductComponent
      },
      {
        path:'seller/:userId',
        component: SellerProfileComponent,    
      },
     {
      path:'categories',
      component:CategoriesComponent,
     },
     {
      canActivate: [AdminGuard],
      path:'wishlist/:userId',
      component: WishlistComponent
    },
     {
      canActivate: [AdminGuard],
      path:'chat/:userId',
      component:ChatComponent
    },
    {
      canActivate: [AdminGuard],
      path:'chat',
      component:ChatComponent
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
