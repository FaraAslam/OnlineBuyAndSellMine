import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/visitor/product.service';
import { Product, ProductDetails } from '../../Models/visitor/home-model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
 
ProductDetail: ProductDetails={
  productId: undefined,
  createdAt: undefined,
  createdBy: undefined,
  modifiedAt: undefined,
  modifiedBy: undefined,
  addedAgo: '',
  isInUserWishList: false,
  name: '',
  description: '',
  sellerName: '',
  sellerPhoneNumber: '',
  sellerAddress: '',
  categoryId: undefined,
  sellerProfileImage: '',
  imageLink: '',
  sellerCreatedAt: '',
  subCategoryName: '',
  categoryName: '',
  productStatusId: 0,
  productStatus: '',
  subCategoryId: undefined,
  price: 0
};
  productId: string | null;

constructor( private productService:ProductService, private router:Router,private route: ActivatedRoute ){}
ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('productId');
    debugger
  this.loadProductDetailsList();
}
 
loadProductDetailsList() {
  debugger
  console.log('details')  
  this.productService.GetAllProductDetials(this.productId).subscribe((data) => {
    
    var dt=data.data;
  
     this.ProductDetail = {
        productId: dt.productId,
        createdAt: dt.createdAt,
        modifiedAt: dt.modifiedAt,
        modifiedBy: dt.modifiedBy,
        addedAgo: dt.addedAgo,
        isInUserWishList: dt.isInUserWishList,
        name: dt.name,
        description: dt.description,
        sellerName: dt.sellerName,
        sellerPhoneNumber: dt.sellerPhoneNumber,
        sellerAddress: dt.sellerAddress,
        categoryId: dt.categoryId,
        sellerProfileImage: dt.sellerProfileImage,
        imageLink: dt.imageLink,
        sellerCreatedAt: dt.sellerCreatedAt,
        subCategoryName: dt.subCategoryName,
        categoryName: dt.categoryName,
        productStatusId: dt.productStatus,
        productStatus: dt.productStatus,
        subCategoryId: dt.subCategoryId,
        price: dt.price,
        createdBy: undefined
     
    
    }

   
  }, (error: any) => {
    console.log(error)
  });
}
}
