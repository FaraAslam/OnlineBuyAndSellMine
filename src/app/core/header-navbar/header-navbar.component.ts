import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { LoginModel } from '../Models/auth-model';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent  implements OnInit {
 
  collapsed = true;
 
  searchKey: any = '';
  quantity: any;
  cartQuantity: any;
  closeModal: string;
  UserId: any;

  profile: boolean = false;
  category: boolean = false;
  userId: any;
  profileLoading: boolean = false;
  SubCategoryLoading: boolean = false;
  constructor(private router: Router,  private accountService: AccountService,  private dashboardService: DashboardService) {
    
  }
  ngOnInit(): void {
}
onKeyUp(data: any) {
  if (data.key == 'Enter') {
    this.router.navigateByUrl('search/' + this.searchKey);
  }
}
public Logout() {
  this.accountService.doLogout();
  this.router.navigateByUrl('/');
}

signUp() {
  this.accountService.doLogout();
  this.router.navigateByUrl('/signup/user');
}
ProfileToogle() {
  this.category = false;
  this.profile = this.profile == true ? false : true;
}
CategoryToogle() {
  this.profile = false;
  this.category = this.category == true ? false : true;
}
clicked() {
  this.category = false;
}

}
