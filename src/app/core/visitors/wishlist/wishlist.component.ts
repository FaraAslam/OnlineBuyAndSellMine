import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/visitor/product.service';
import { Product } from '../../Models/visitor/home-model';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { User } from '../../Models/dashboard-model';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  userId: any;
  wishlistProducts:Product[]=[];
  errorMessage:any= "";
  user:User={
    userId: '',
    name: '',
    profileImage: ''
  }
  constructor(private productService:ProductService,private accountService:AccountService,private router:Router){}

  ngOnInit(): void {
    this.userId = this.accountService.getUserId();
   this.loadUserWishListProduct(); 
  }

loadUserWishListProduct(){ 
  debugger
    this.productService.GetUserWishListProduct(this.userId).subscribe((data) => {
      var dt=data.data.productList;
   //   this.wishlistProducts = [];
      debugger
        for(let a = 0; a < dt.length; a++){
          let _product:Product={
            productId: dt[a].productId,
            name: dt[a].productName,
            description: dt[a].description,
            howYearOld: dt[a].howYearOld,
            price: dt[a].price,
            createdAt: dt[a].createdAt,
            addedAgo: dt[a].addedAgo,
            wishListId: dt[a].wishListId,
            isInUserWishList: dt[a].isInUserWishList,
            imageLink: dt[a].productImage == null ? "assets/Images/RecentProducts.png" : dt[a].productImage,
            categoryName: ''
          } 
          debugger
        this.wishlistProducts.push(_product);
      }
    }, (error) => {  
      });
  }
  removeToWishList(wishlistId:any){
    this.productService.removeProductIntoUserWishList(wishlistId).subscribe(
      (dt) => {
        this.loadUserWishListProduct();
      },
      (error) => {
        this.errorMessage = error.message;
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/login');
        }
      }
    );
  }
}
