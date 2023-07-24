import { Component } from '@angular/core';
import { Products } from '../../Models/product-model';
import { ProductService } from 'src/app/services/visitor/product.service';


@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  Products: Products[]=[];
  constructor( private productService:ProductService){}
  ngOnInit(){
    this.userProductList()
  }
  userProductList() {
    debugger  
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
          productImages: ''
        }
        this.Products.push(_product);
      }

    }, (error: any) => {
      console.log(error)
    });
  }
}
