import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/visitor/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { Products} from '../../Models/visitor/home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Products>;
 
  ProductDetails: Products[] =[];
  RecentProducts:Products[]=[];
  NewProducts: Products[]=[];
constructor(private homeService:HomeService){}
ngOnInit(){
  this.loadUsedProducts()
  this.loadRecentProducts()
  this. loadNewProducts()
}
 loadRecentProducts(): void {

  this.homeService.GetRecentProductsForHomePage().subscribe((data) => {
   
    var dt = data.data;
    for (let a = 0; a < dt.length; a++) {
      let RecentProducts: Products = {
        name: dt[a].name,
        productId: dt[a].productId,
        createdAt: dt[a].createdAt,
        createdBy: dt[a].createdBy,
        modifiedAt: dt[a].modifiedAt,
        modifiedBy: dt[a].modifiedBy,
        addedAgo: dt[a].addedAgo,
        isInUserWishList: dt[a].isInUserWishList,
        description: dt[a].description,
        sellerName: dt[a].sellerName,
        sellerPhoneNumber: dt[a].sellerPhoneNumber,
        sellerAddress: dt[a].sellerAddress,
        categoryId: dt[a].categoryId,
        sellerProfileImage: dt[a].sellerProfileImage,
        imageLink: dt[a].imageLink,
        sellerCreatedAt: dt[a].sellerCreatedAt,
        subCategoryName: dt[a].subCategoryName,
        categoryName: dt[a].categoryName,
        productStatusId: dt[a].productStatusId,
        productStatus: dt[a].productStatus,
        subCategoryId: dt[a].subCategoryId,
        isOld:dt[a].isOld,
        howYearOld: dt[a].howYearOld,
        price: dt[a].price,
        location: dt[a].location,
        productImages: dt[a].productImages,
      }
      this.RecentProducts.push(RecentProducts);
    }
    // this.dataSource = new MatTableDataSource(this.RecentProducts);
  }, (error) => {
    console.log(error)
  });
 }
 loadNewProducts(): void {
  debugger
  this.homeService. GetBrandNewProductsForHomePage().subscribe((data) => {
    debugger
    var dt = data.data;
    for (let a = 0; a < dt.length; a++) {
      let NewProducts: Products = {
        name: dt[a].name,
        productId: dt[a].productId,
        createdAt: dt[a].createdAt,
        createdBy: dt[a].createdBy,
        modifiedAt: dt[a].modifiedAt,
        modifiedBy: dt[a].modifiedBy,
        addedAgo: dt[a].addedAgo,
        isInUserWishList: dt[a].isInUserWishList,
        description: dt[a].description,
        sellerName: dt[a].sellerName,
        sellerPhoneNumber: dt[a].sellerPhoneNumber,
        sellerAddress: dt[a].sellerAddress,
        categoryId: dt[a].categoryId,
        sellerProfileImage: dt[a].sellerProfileImage,
        imageLink: dt[a].imageLink,
        sellerCreatedAt: dt[a].sellerCreatedAt,
        subCategoryName: dt[a].subCategoryName,
        categoryName: dt[a].categoryName,
        productStatusId: dt[a].productStatusId,
        productStatus: dt[a].productStatus,
        subCategoryId: dt[a].subCategoryId,
        isOld:dt[a].isOld,
        howYearOld: dt[a].howYearOld,
        price: dt[a].price,
        location: dt[a].location,
        productImages: dt[a].productImages,
      }
      this.NewProducts.push(NewProducts);
    }
    // this.dataSource = new MatTableDataSource(this.RecentProducts);
  }, (error) => {
    console.log(error)
  });
 }
 loadUsedProducts(): void {
  
  this.homeService.GetUsedProductsForHomePage().subscribe((data) => {
   
    var dt = data.data;
    for (let a = 0; a < dt.length; a++) {
      let ProductDetails: Products = {
        name: dt[a].name,
        productId: dt[a].productId,
        createdAt: dt[a].createdAt,
        createdBy: dt[a].createdBy,
        addedAgo: dt[a].addedAgo,
        isInUserWishList: dt[a].isInUserWishList,
        description: dt[a].description,
        sellerName: dt[a].sellerName,
        sellerPhoneNumber: dt[a].sellerPhoneNumber,
        sellerAddress: dt[a].sellerAddress,
        categoryId: dt[a].categoryId,
        sellerProfileImage: dt[a].sellerProfileImage,
        imageLink: dt[a].imageLink,
        howYearOld: dt[0].howYearOld,
        price: dt[0].price,
        modifiedAt: dt[a].modifiedAt,
        modifiedBy: dt[a].modifiedBy,
        sellerCreatedAt: dt[a].sellerCreatedAt,
        subCategoryName: dt[a].subCategoryName,
        categoryName: dt[a].categoryName,
        productStatusId: dt[a].productStatusId,
        productStatus: dt[a].productStatus,
        subCategoryId: dt[a].subCategoryId,
        isOld: dt[a].isOld,
        location: dt[a].location,
        productImages: dt[a].productImages
      }
      this.ProductDetails.push(ProductDetails);
    }
   // this.dataSource = new MatTableDataSource(this.ProductDetails);
  }, (error) => {
    console.log(error)
  });
 }
}
