import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { User, Visitors } from '../../Models/dashboard-model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Products } from '../../Models/product-model';
import { UserList } from '../../Models/visitor/user-model';
import { ProductService } from 'src/app/services/visitor/product.service';
import { strings } from '@material/menu';
import { Product } from '../../Models/visitor/home-model';
import Swal from 'sweetalert2';

// export interface PeriodicElement {
//   image: string;
//   name: string;
//   price: number;
//   category: string;
//   condition: string;
//   seller: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
//   { image: 'image', name: 'Make up pouch with Plastic chain', price: 1200, category: 'category name', condition: 'New', seller: 'Iqra Saleem' },
// ];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = [' image', ' name', 'price', 'category', 'condition','status', 'seller'];
  dataSource: MatTableDataSource<Products>;
  // dataSource = ELEMENT_DATA;
  selectValue: boolean | null;
  user: User;
  Products: Products[] = [];
  ProductService: any;
  isOld:boolean | null=false;
  products: Product[]= [];
  selectSearchStatus='Select..'

  valueChange(data: any) {
    if (data == 'new')
      this.selectValue = false;
    else if (data == 'old') {
      this.selectValue = true;
    }
    else {
      this.selectValue = null;
    }
  }
  constructor(private productService: ProductService,private accountService:AccountService,private router:Router) {
   
  }
  ngOnInit() {

    this.loadProductList(null,null)
  }

  loadProductList(searchValue:any,selectSearchStatus:any):void {  
      this.products= []
      if (selectSearchStatus == "false") {
        this.isOld = false;
      }
     else if (selectSearchStatus == "true") {
        this.isOld = true;
      }
      else{
        this.isOld = null;
      }
      if(searchValue == ''){
        searchValue= null
      }
    this.productService.GetProductDetials(ProductService).subscribe((data) => {
      debugger
      var dt=data.data;
      for (let a = 0; a < dt.length; a++) {
        let _product: Products = {
          productId: dt[a].productId,
          createdAt: dt[a].createdAt,
          createdBy: dt[a].createdBy,
          modifiedAt: dt[a].modifiedAt,
          modifiedBy: dt[a].modifiedBy,
          addedAgo: dt[a].addedAgo,
          imageLink: dt[a].imageLink ,
          subCategoryId: dt[a].subCategoryId,
          description: dt[a].description,
          isOld: dt[a].isOld,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          location: dt[a].location,
          isInUserWishList: dt[a].isInUserWishList,
          name: dt[a].name,
          productImages: dt[a].productImages
        }
        this.Products.push(_product);
      }

      this.dataSource = new MatTableDataSource(this.Products);
    }, (error) => {  
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/login');
      }
      console.log(error)
      });
  }
  UpdateProductStatus(productId: any,data: any) {
    this.productService
      .updateProductStatus(productId,data)
      .subscribe((result) => {
        this.selectSearchStatus='ChangeStatus';
        if (result) {
          Swal.fire('Thank you!', 'Your product is Updated', 'success');
          setTimeout(() => {
            this.loadProductList(null,null);
          },1000);
        }
      });
  }
}
