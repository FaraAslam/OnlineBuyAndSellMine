import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class HomeService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }
     //api/Home/get-recent-Products-for-home-page

     GetRecentProductsForHomePage() {
          return this.repositoryService.get('Home/get-recent-Products-for-home-page',true)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
     //api/Home/get-new-Products-for-homePage
     GetBrandNewProductsForHomePage() {
          return this.repositoryService.get('Home/get-new-Products-for-homePage',true)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
     //api/Home/get-used-Products-for-homePage
     GetUsedProductsForHomePage() {
        return this.repositoryService.get('Home/get-used-Products-for-homePage',true)
             .pipe(map((response: any) => {
                  return response;
             }));
   }
    
}
