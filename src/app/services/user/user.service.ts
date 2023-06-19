import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../repository/repository.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private repositoryService: RepositoryService) { }
  isAdminRights():boolean{
    return true;
  }
  //api/User/get-all-users-for-admin
  GetVisitorList() {
    
      return this.repositoryService.get('User/get-all-users-for-admin',true)
           .pipe(map((response: any) => {
                return response;
           }));
    }
    //api/User/get-user-profile/{userId}
    sellerProfileDate(id: any) {
      return this.repositoryService.get(`User/get-user-profile/` + id, true).pipe(
        map((response: any) => {
          return response;
        })
      );
    }
    sellerProductsData(id: any) {
      return this.repositoryService
        .get('Product/get-user-Products/' + id, false)
        .pipe(
          map((response: any) => {
            return response;
          })
        );
    }
}
