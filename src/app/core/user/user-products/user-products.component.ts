import { Component } from '@angular/core';
import { Products } from '../../Models/product-model';
import { ProductService } from 'src/app/services/visitor/product.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { UserProductDetails } from '../../Models/visitor/user-model';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  Products: Products[]=[];
  products: UserProductDetails[] = [];
  constructor( private productService:ProductService,private userService:UserService){}
  ngOnInit(){
    this.userProductList()
  }
  userProductList() {
    this.productService.GetProductDetials(ProductService).subscribe((data) => { 
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
          productImages: ''
        }
        this.Products.push(_product);
      }

    }, (error: any) => {
      console.log(error)
    });
  }
  deleteUserProduct(id: any) {
    debugger
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
            debugger
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.products = [];
            this.userProductList();
          }
        });
      }
    });
  }
}
