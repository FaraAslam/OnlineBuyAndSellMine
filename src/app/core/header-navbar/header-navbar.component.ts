import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { LoginModel } from '../Models/auth-model';
import { UserService } from 'src/app/services/user/user.service';
import { UserList } from '../Models/visitor/user-model';
import { ProductService } from 'src/app/services/visitor/product.service';
import { search } from '../Models/visitor/home-model';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent  implements OnInit {

  searchProduct:search[] = [];
  collapsed = true;
  searchKey: any = '';
  quantity: any;
  cartQuantity: any;
  closeModal: string;
  UserId: any;
  searchKeyProduct: string |null;
  profile: boolean = false;
  category: boolean = false;
  userId: any;
  profileLoading: boolean = false;
  SubCategoryLoading: boolean = false;
  IsCurrentUser: boolean = false;

  userData:UserList={
    noOfProducts: 0,
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phoneNumber: '',
    profileImage: './assets/Images/userimg.png',
    fullName: '',
    address: '',
    whatsAppNumber: 0
  }


  constructor(private router: Router,  private accountService: AccountService,
    private route:ActivatedRoute ,private dashboardService: DashboardService,private userService:UserService,
    private productService:ProductService) {   
    this.UserId = this.accountService.getUserId();
  }
  ngOnInit(): void {
    this.UserId = this.accountService.getUserId();
    this.loadUserData() 
  }
onKeyUp(data: any) {
  if (data.key == 'Enter') {
    this.router.navigateByUrl('search/' + this.searchKey);
  }
}
public Logout() {
  this.accountService.doLogout();
  this.router.navigateByUrl('/login');
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
      profileImage: dt.profileImage== null?"assets/Images/userimg.png" : dt.profileImage,
      fullName: dt.fullName,
      address: dt.address,
      whatsAppNumber: dt.whatsAppNumber
    }
  });
}
searchProducts(event: any) {
  console.log(event.key.length);
  
  if (event.key==' ') {
    const element = event.target as HTMLInputElement;
    if (element.value) {
      this.productService.GetAllProduct().subscribe((result) => {
        this.searchProduct = [];
        // if (result.data.length > 6) {
        //   result.data.length = 6;
        // }
        this.searchProduct = result.data;
        this.onSearchKeyUp(element.value);
      });
    }
    if(element.value==""){this.hidesearchresult()}
    if (event.key == 'Enter') {
      // this.submitSearch(element.value);
    }
  }
}
onSearchKeyUp(event: any) {
  this.searchProduct = this.FilterNotifications(event);
}
FilterNotifications(value: string): search[] {
  return this.searchProduct.filter((s) =>
    s.name.toLowerCase().includes(value.toLowerCase())
  );
}
hidesearchresult(){
  this.searchProduct=[]
}
submitSearch(productKey: any,locationKey:any) {
  this.router.navigate([`/search/${productKey}/${locationKey}`]);
}
redactDetail(id: number) {
  this.router.navigate([`product-details/${id}`]);
}
}
