import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../repository/repository.service';
import { map } from 'rxjs/internal/operators/map';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private repositoryService: RepositoryService,private accountService:AccountService) { }
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
    //api/User/get-user-profile/{userId}
   
    userProfileData(Id: any) {
      return this.repositoryService.get(`User/get-user-profile/` + Id, true).pipe(
        map((response: any) => {
          return response;
        })
      );
    }
    userProductsData() {
      return this.repositoryService.get('Product/get-all-Products',true)
           .pipe(map((response: any) => {
                return response;
           }));
 }
 userProfileDate() {
  var userId = this.accountService.getUserId();
  return this.repositoryService
    .get(`User/get-user-profile/` + userId, true)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
}
//api/Product/delete/{productId}
userProductDelete(id: any) {
  return this.repositoryService.delete('Product/delete/' + id).pipe(
    map((response: any) => {
      return response;
    })
  );
}
}
