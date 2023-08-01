import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { LoginModel } from '../Models/auth-model';
import { UserService } from 'src/app/services/user/user.service';
import { UserList } from '../Models/visitor/user-model';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent  implements OnInit {
  userData:UserList={
    noOfProducts: 0,
    userId: undefined,
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phoneNumber: '',
    profileImage: undefined,
    fullName: '',
    address: '',
    whatsAppNumber: 0
  }

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
  IsCurrentUser: boolean = false;

  constructor(private router: Router,  private accountService: AccountService,private route:ActivatedRoute ,private dashboardService: DashboardService,private userService:UserService) {   
    this.UserId = this.accountService.getUserId();
  }
  ngOnInit(): void {
    this.loadUserData() 
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

loadUserData(): void {
  this.userService.userProfileDate().subscribe((result) => {
    let dt=result.data;
    this.userData={
      noOfProducts: dt.noOfProducts,
      userId: dt.userId,
      firstName:dt.firstName,
      lastName: dt.lastName,
      email: dt.email,
      userName: dt.userName,
      phoneNumber:dt.phoneNumber,
      profileImage: dt.profileImage,
      fullName: dt.fullName,
      address: dt.address,
      whatsAppNumber: dt.whatsAppNumber
    }
  });
}
}
