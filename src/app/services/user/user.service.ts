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
    //api/Product/get-user-Products/{userId}
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
      //add-update-user-profile-image
  updateUserProfileImage( data: any) {
    console.log("data api",data);
    
    return this.repositoryService.put('User/add-update-user-profile-image/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
    userProductUpdate(_id: any, _data: any) {
      return this.repositoryService.put('Product/update/'+_id, _data).pipe(
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
userProfileUpdate(data:any){
  return this.repositoryService
    .putWithOutFile(`User/update-user-profile`, data)
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
//api/Product/get-user-Products
userProductData() {
  return this.repositoryService
    .get('Product/get-user-Products/' , true)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
}
}
