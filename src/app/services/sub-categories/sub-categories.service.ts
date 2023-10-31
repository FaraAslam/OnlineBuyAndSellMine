import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository/repository.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
 

  constructor(private router: Router,private _repositoryService:RepositoryService) { }

 
  //api/SubCategory/get-subCategories/{categoryId}
  getSubCategories(categoryId:any){
   
      return this._repositoryService.get('SubCategory/get-subCategories/'+categoryId,true)
           .pipe(map((response: any) => {
                return response;
      }));
 }
     //SubCategory
     GetSubCategoriesById(categoryId:any) {
          return this._repositoryService.get('SubCategory/get-subCategories/'+categoryId,true)
           .pipe(map((response: any) => {
                return response;
           }));
 }
 GetCategories() {
     return this._repositoryService.get('Category/get-categories',true)
          .pipe(map((response: any) => {
               return response;
          }));
}
GetSubCategoryProducts(subCategoryId : any, data: object) {
     return this._repositoryService.post('Product/get-subCategory-Products-by-search-filter/'+subCategoryId, data, false)
          .pipe(map((response: any) => {
               return response;
          }));
}
  }

