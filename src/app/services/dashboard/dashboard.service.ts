import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AccountService } from '../account/account.service';
import { RepositoryService } from '../repository/repository.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private router: Router, private repositoryService: RepositoryService, private accountService : AccountService) { }

  GetVisitorList() {
    return this.repositoryService.get('User/get-all-users-for-admin',true)
         .pipe(map((response: any) => {
              return response;
         }));
}

GetLoginUserData() {
var userId = this.accountService.getUserId();
  return this.repositoryService.get('User/get-user-profile/'+userId,true)
       .pipe(map((response: any) => {
            return response;
       }));
}

GetDashboardCount(){
  return this.repositoryService.get('Dashboard/get-dashboard-counts',true)
  .pipe(map((response: any) => {
       return response;
  }));
}

GetCategoryStockGraph(){
  return this.repositoryService.get('Dashboard/get-category-stock-graph',true)
  .pipe(map((response: any) => {
       return response;
  }));
}

GetOldNewProductCount(){
  return this.repositoryService.get('Dashboard/get-old-new-product-counts',true)
  .pipe(map((response: any) => {
       return response;
  }));
}

GetUserRegistrationDetailsByGraph(){
  return this.repositoryService.get('Dashboard/get-user-graph-details',true)
  .pipe(map((response: any) => {
       return response;
  }));
}
}
