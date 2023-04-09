import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { RepositoryService } from '../repository/repository.service';


@Injectable({
     providedIn: 'root'
})
export class MenuNavbarService {

     constructor(private router: Router, private repositoryService: RepositoryService) { }


     GetCategories() {
          return this.repositoryService.get('Category/get-categories',true)
               .pipe(map((response: any) => {
                    return response;
               }));
     }
    
}
