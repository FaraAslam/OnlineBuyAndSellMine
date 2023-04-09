import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { User, Visitors } from '../../Models/dashboard-model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


export interface PeriodicElement {
  image: string;
  name:string;
  price:number;
  category:string;
  condition:string;
  seller:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
  {image:'image', name: 'Make up pouch with Plastic chain',  price:1200,category:'category name',condition:'New',seller:'Iqra Saleem'},
];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  value = 'Search';

  selectvalue: boolean | null;
  valueChange(data: any) {
    if (data == 'new')
      this.selectvalue = false;
    else if (data == 'old') {
      this.selectvalue = true;
    }
    else {
      this.selectvalue = null;
    }
  }
  displayedColumns: string[] = [' image',' name','price','category','condition','seller'];
  dataSource = ELEMENT_DATA;
}
