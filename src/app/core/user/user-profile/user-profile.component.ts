import { Component } from '@angular/core';
import { UserList } from '../../Models/visitor/user-model';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userList: UserList ={
    noOfProducts: 0,
    userId: undefined,
    email: '',
    userName: '',
    phoneNumber: '',
    profileImage: '',
    fullName: '',
    address: '',
    whatsAppNumber: 0,
    firstName: '',
    lastName: ''
  };
  userId: any;
 
constructor(private userService: UserService,private router:Router,
   private route: ActivatedRoute,private accountService:AccountService){}

ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
    this.userId = routeParams.get('userId');
    this.userId = this.accountService.getUserId()
 this.getUserData() 
}
getUserData(){
  debugger
   this.userService.userProfileData(this.userId).subscribe((result) => {
     debugger
    let dt=result.data;
    this.userList={
     noOfProducts: dt.noOfProducts,
     userId: dt.userId,
     email: dt.email,
     userName: dt.userName,
     phoneNumber: dt.phoneNumber,
     profileImage: dt.profileImage,
     fullName: dt.fullName,
     address: dt.address,
     whatsAppNumber: dt.whatsAppNumber,
     firstName:dt.firstName,
    lastName:dt.lastName,
    }
  });
}

}
