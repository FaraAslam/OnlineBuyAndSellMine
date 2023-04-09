import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class CategoryService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }


     GetCategoryProducts(categoryId : any, data: object) {
          debugger
          return this.repositoryService.post('Product/get-category-Products-by-search-filter/'+categoryId, data, false)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
}
