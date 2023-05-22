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
  getSubCategories(){
   
      return this._repositoryService.get('SubCategory/get-subCategories/{categoryId}',true)
           .pipe(map((response: any) => {
                return response;
      }));
 }
  }

