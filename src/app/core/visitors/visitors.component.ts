import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent  implements OnInit {
 
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

