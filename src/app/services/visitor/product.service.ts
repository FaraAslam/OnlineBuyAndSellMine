import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private router: Router,
    private repositoryService: RepositoryService
  ) {}
  isAdminRights(): boolean {
    return true;
  }
  GetAllProduct() {
    return this.repositoryService.get('Product/get-all-Products/', false).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  //api/Product/get-all-Products
  GetProductDetials(productId: any) {
    return this.repositoryService.get('Product/get-all-Products', true).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  //api/Product/get-product/{productId}
  GetAllProductDetials(productId: any) {
    return this.repositoryService
      .get('Product/get-product/' + productId, true)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  //api/Product/get-Product-related-items/{categoryId}
  GetRelatedProducts(categoryId: any) {
    return this.repositoryService
      .get('Product/get-Product-related-items/' + categoryId, true)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  addProduct(data : any) {
    return this.repositoryService.postWithFile('Product/add', data, ).pipe(
         map((response: any) => {
           return response;
         })
       );
}
  //update-product-status
  //Product/update-product-status/{productId}
  updateProductStatus(productId: any, productStatusId: any) {
    debugger;
    return this.repositoryService
      .put(
        'Product/update-product-status/' +
          productId +
          '?productStatusId=' +
          productStatusId,
        {}
      )
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  removeProductImage(image: any) {
    return this.repositoryService
      .delete('Product/delete-product-image/' + image)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  addProductImages(id: any, data: any) {
    return this.repositoryService
      .postWithFile('Product/add-product-images/' + id, data)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  removeProductIntoUserWishList(wishListId: any) {
    return this.repositoryService.delete('WishList/remove-product-into-user-wishList/' + wishListId).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  //api/WishList/add-product-into-user-wishList/{productId}/{userId}
  addProductIntoUserWishList(productId : any, userId: any) {
    return this.repositoryService.post('WishList/add-product-into-user-wishList/'+ productId + "/" + userId , {}, true).pipe(
         map((response: any) => {
           return response;
         })
       );
}
   //get-user-wishList-products/{userId}
   GetUserWishListProduct(userId : any) {
    return this.repositoryService.get('WishList/get-user-wishList-products/'+userId,true)
         .pipe(map((response: any) => {
              return response;
         }));
}
}
