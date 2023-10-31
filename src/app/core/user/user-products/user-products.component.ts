import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import {  UserList, UserProductDetails } from '../../Models/visitor/user-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  
  products: UserProductDetails[] = [];
 
  userId: any='';

 


  constructor( private userService:UserService,private accountService:AccountService,private router:Router){}
 
  ngOnInit():void{
    this. getProducts()
    
  }
  getProducts() {
    debugger
        this.userService.userProductData().subscribe((result) => {
          debugger
          var dt = result.data;
          for (let a = 0; a < dt.length; a++) {
            let product: UserProductDetails = {
              productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          isOld: dt[a].isOld,
          imageLink: dt[a].imageLink == null
            ? 'assets/Images/RecentProducts.png'
            : dt[a].imageLink,
          createdBy: dt[a].createdBy,
          modifiedAt: dt[a].modifiedAt,
          modifiedBy: dt[a].modifiedBy,
          isInUserWishList: dt[a].isInUserWishList,
          sellerName: dt[a].sellerName,
          sellerProfileImage:dt[a] .sellerProfileImage,
          sellerAddress: dt[a].sellerAddress,
          sellerCreatedAt: dt[a].sellerCreatedAt,
          sellerPhoneNumber:dt[a].sellerPhoneNumber,
          sellerWhatsAppNumber: dt[a].sellerWhatsAppNumber,
          subCategoryName:dt[a].subCategoryName,
          categoryId: dt[a].categoryId,
          categoryName:dt[a].categoryName,
          productStatusId: dt[a].productStatusId,
          productStatus: dt[a].productStatus,
          subCategoryId: dt[a].subCategoryId,
          location: dt[a].location,
          productImages:dt[a].productImages
            };
          
          this.products.push(product);
        }
      }
      , (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/');
        }
        console.log("Error in getAssets: " + error.message);
      });
      }
  deleteUserProduct(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.userService.userProductDelete(id).subscribe((result) => {
          if (result) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.products = [];
            this. getProducts();
          }
        });
      }
    });
  }
  addProduct(){
this.router.navigate(['add-product'])
  }
}
