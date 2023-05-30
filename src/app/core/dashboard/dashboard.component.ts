import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from '../../services/account/account.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  CurrentUser :any;
  UserId : any;
  status: boolean = false;
  chevron: string="chevron-right"; 
  Menu :any = {
    Products: true,
    Categories: false,
    VisitorList: false,
  
  };
  constructor(private router: Router, private accountService: AccountService) { }
  ngOnInit(): void {
  //   if(this.accountService.getUserRole() == 'Admin')
  //   {
  //    var url=window.location.href
  //    if(url.includes('/dashboard/products')){
  //      this.activeItem('Products')
  //    }
  //    else if(url.includes('/dashboard/categories')){
  //      this.activeItem('Category')
  //    }
  //    else if(url.includes('/dashboard/visitors')){
  //     this.activeItem('Visitors')
  //   }
  //   else if(url.includes('/dashboard/profile')){
  //     this.activeItem('profile')
  //   }
     
  //   }
  //  else{
  //    this.router.navigateByUrl('/');  
  //  }
   }

  public Logout(){
    //this.loginService.doLogout();
    this.router.navigateByUrl('/');  
  }
  clickEvent(){
    this.status = !this.status; 
    this.chevron = this.chevron== "chevron-right" ? "chevron-left" : "chevron-right";      
  }
  activeItem(item:any){ 
    this.Menu ={
      Products: false,
      categories: false,
      visitorList: false,
      Project: false,
      Users: false,
      profile: false,
     
    }
    this.Menu[item]=true;
    
   
  }
}
