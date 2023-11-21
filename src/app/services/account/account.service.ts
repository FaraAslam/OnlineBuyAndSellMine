import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginModel, SignUpModel } from 'src/app/core/Models/auth-model';
import { RepositoryService } from '../repository/repository.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private router: Router, private repositoryService: RepositoryService, private httpClient: HttpClient,
  )  { }
  getToken() {
    return localStorage.getItem('access_token');
  }
  // getASPUserId() {
  //   return localStorage.getItem('aspUserId');
  // }
  getUserId() {
    return localStorage.getItem('user_id');
  }
  getUserRole() {
    return localStorage.getItem('user_role');
  }
  getUserType() {
    return localStorage.getItem('user_type');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  doLogout() {

    let removeToken = localStorage.removeItem('access_token');
    let removeUserID = localStorage.removeItem('user_id');
    let removeUserRole = localStorage.removeItem('user_role');
    if (removeToken == null && removeUserID == null && removeUserRole == null) {
      this.router.navigate(['/login']);
    }
  }

  login(loginModel: LoginModel) {
    return this.repositoryService.post('Auth/login', loginModel,false)
        .pipe(map((user: any) => { 
        
            //store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('access_token', user.token)  
            localStorage.setItem('user_id', user.userId) 
            localStorage.setItem('user_role', user.role)
          //  localStorage.setItem('user_type','business')
            return user;
        })); 
  }

  UserSignUp(signUpModel: SignUpModel)
  {
    return this.repositoryService.post('Auth/UserSignUp', signUpModel,false)
    .pipe(map((user: any) => { 
      return user;
  })); 
  }
    //api/Auth/update-user-lastSeen-details
    UpdateUserForLastSeen() {
      return this.repositoryService.put('Auth/update-user-lastSeen-details',{})
      .pipe(map((response: any) => {
          return response;
        })
      );
    }
}
