import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class ProductService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }


     GetProductDetials(productId : any) {
          return this.repositoryService.get('Product/get-product/'+productId,false)
               .pipe(map((response: any) => {
                    return response;
               }));
     }

     GetProductRelatedItems(categoryId : any) {
          return this.repositoryService.get('Product/get-Product-related-items/'+categoryId,false)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
    
}
