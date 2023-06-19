import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class ProductService {
    
     constructor(private router: Router, private repositoryService: RepositoryService) {}
     isAdminRights():boolean{
          return true;
        } 
 //api/Product/get-all-Products 
     GetProductDetials(productId : any) {
          return this.repositoryService.get('Product/get-all-Products',true)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
     //api/Product/get-product/{productId}
     GetAllProductDetials(productId : any) {
          return this.repositoryService.get('Product/get-product/'+productId,true)
               .pipe(map((response: any) => {
                    return response;
               }));
     } 
     //api/Product/get-Product-related-items/{categoryId}
     GetRelatedProducts(categoryId : any) {
          return this.repositoryService.get('Product/get-Product-related-items/'+categoryId,true)
               .pipe(map((response: any) => {
                    return response;
               }));
     } 
}
