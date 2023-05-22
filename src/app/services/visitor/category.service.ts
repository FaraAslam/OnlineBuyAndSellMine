import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class CategoryService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }

    //api/Category/get-categories
     GetCategoryProducts(categoryId : any, data:object) {
          debugger
          return this.repositoryService.get('Category/get-categories',  true)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
     GetCategories() {
          return this.repositoryService.get('Category/get-categories',true)
               .pipe(map((response: any) => {
                    return response;
          }));
     }
}
