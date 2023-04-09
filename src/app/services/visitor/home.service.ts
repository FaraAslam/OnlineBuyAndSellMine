import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class HomeService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }


     GetRecentProductsForHomePage() {
          return this.repositoryService.get('Home/get-recent-Products-for-home-page',false)
               .pipe(map((response: any) => {
                    return response;
               }));
     }

     GetBrandNewProductsForHomePage() {
          return this.repositoryService.get('Home/get-new-Products-for-homePage',false)
               .pipe(map((response: any) => {
                    return response;
               }));
     }

     GetUsedProductsForHomePage() {
        return this.repositoryService.get('Home/get-used-Products-for-homePage',false)
             .pipe(map((response: any) => {
                  return response;
             }));
   }
    
}
