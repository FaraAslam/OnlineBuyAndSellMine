import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/visitor/home.service';
import { Product } from '../../Models/visitor/home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  RecentProducts:Product[]=[];
  BrandNewProducts:Product[]=[];
  product : Product={
    productId: '',
    name: '',
    description: '',
    howYearOld: 0,
    price: 0,
    createdAt: '',
    addedAgo: '',
    imageLink:''
  }
  UsedProducts:Product[]=[];
  constructor(private router: Router,private homeService: HomeService) { }
  ngOnInit(): void {
    this.loadRecentProducts();
    this.loadBrandNewProducts();
    this.loadUsedProducts();
  }

 //get recent product
 loadRecentProducts(){   
  this.homeService.GetRecentProductsForHomePage().subscribe((data) => {
    debugger
    var dt=data.data;
      for(let a = 0; a < dt.length; a++){
        let _product:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          imageLink:dt[a].imageLink == null ? "assets/Images/RecentProducts.png" :dt[a].imageLink
        } 
      this.RecentProducts.push(_product);
    } 
  }, (error) => {  
    console.log(error)
    });
}
    //AllbrandNewProducts
loadBrandNewProducts(){   
  this.homeService.GetBrandNewProductsForHomePage().subscribe((data) => {
    debugger
    var dt=data.data;
      for(let a = 0; a < dt.length; a++){
        let _product:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          imageLink:dt[a].imageLink == null ? "assets/Images/RecentProducts.png" :dt[a].imageLink
        } 
      this.BrandNewProducts.push(_product);
    } 
  }, (error) => {  
    console.log(error)
    });
}

 //AllUsedProducts
 loadUsedProducts(){   
  this.homeService.GetUsedProductsForHomePage().subscribe((data) => {
    debugger
    var dt=data.data;
      for(let a = 0; a < dt.length; a++){
        let _product:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          imageLink:dt[a].imageLink == null ? "assets/Images/RecentProducts.png" :dt[a].imageLink
        } 
      this.UsedProducts.push(_product);
    } 
  }, (error) => {  
    console.log(error)
    });
}
}
