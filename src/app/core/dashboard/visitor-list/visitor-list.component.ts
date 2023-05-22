import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { User, Visitors } from '../../Models/dashboard-model';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserList } from '../../Models/visitor/user-model';

export interface PeriodicElement {
  image: string;
  name:string;
  phone:number;
  email:string;
 count:number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Salem',  phone:12345678,email:'abcd@gmail.com',count:1},
];
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  displayedColumns: string[] = [' image',' name','phone','email','count'];
  dataSource: MatTableDataSource<UserList>;
  outputPath:string = 'www.google.com';
  userList:UserList[]=[]

  constructor(private userService: UserService) {
    
  }
  ngOnInit(){
    this.loadVisitorList()
  }
  loadVisitorList(){   
    this.userService.GetVisitorList().subscribe((data) => {
      debugger
      var dt=data.data;
        for(let a = 0; a < dt.length; a++){
          let _visitor:UserList={
            noOfProducts:dt[a].noOfProducts,
            fullName:dt[a].firstName + " " + dt[a].lastName,
            phoneNumber:dt[a].phoneNumber,
            email:dt[a].email,
            userId:dt[a].userId,
            userName:dt[a].userName,
            profileImage:dt[a].profileImage == null ? "assets/Images/RecentProducts.png" :dt[a].imageLink
          } 
        this.userList.push(_visitor);
      } 
      
      this.dataSource = new MatTableDataSource(this.userList); 
    }, (error) => {  
      console.log(error)
      });
  }
}
