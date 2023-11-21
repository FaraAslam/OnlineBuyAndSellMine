import { Component, OnInit } from '@angular/core';
import { UserData } from '../Models/dashboard-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.loadUserData()
  }

  UserData: UserData ={
    userId: '',
    name: '',
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phoneNumber: 0,
    address: '',
    whatsAppNumber: 0
  };
  loadUserData(): void {
    this.userService.userProfileDate().subscribe((result) => {
      let dt= result.data;
    this.UserData.name=dt.firstName+' '+dt.lastName
    this.UserData.profileImage=dt.profileImage == null
    ? 'assets/Images/RecentProducts.png'
    : dt.profileImage
       });
  }
}
