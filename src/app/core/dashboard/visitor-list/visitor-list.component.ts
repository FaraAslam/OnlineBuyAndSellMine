import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { User, Visitors } from '../../Models/dashboard-model';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

export interface PeriodicElement {
  image: string;
  name:string;
  phoneno:number;
  email:string;
 count:number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
  {image:'image', name: 'Iqra Saleem',  phoneno:12345678,email:'abcd@gmail.com',count:1},
];
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent  {
  displayedColumns: string[] = [' image',' name','phoneno','email','count'];
  dataSource = ELEMENT_DATA;
  outputPath:string = 'www.google.com';

  constructor() {
    
  }
}
