import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/visitor/product.service';
import { Product, ProductDetails } from '../../Models/visitor/home-model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{

  productId: any;
  categoryId: any;
  constructor(private router: Router,private productService: ProductService, private route: ActivatedRoute)  {
   
  }
  Product : ProductDetails =
  {
    productId: undefined,
    name: '',
    description: '',
    howYearOld: 0,
    price: 0,
    createdAt: undefined,
    isOld: false,
    sellerName: '',
    sellerPhoneNumber: '',
    sellerPartnership: undefined,
    condition: '',
    sellerAddress: '',
    categoryId: undefined,
    addedAgo : '',
    imageLink:''
  };

  RelatedProducts : Product[] = [];
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('productId');
    this.loadProductDetails();
    
   
}

//get product details
loadProductDetails(){   
  this.productId = 'e9d660b4-a324-4050-b35b-eecb3a319c80';
  this.productService.GetProductDetials(this.productId).subscribe((data) => {
    var dt=data.data;
     
        this.Product={
          productId: dt.productId,
          name: dt.name,
          description: dt.description,
          howYearOld: dt.howYearOld,
          price: dt.price,
          createdAt: dt.createdAt,
          isOld: dt.isOld,
          condition: dt.isOld == false ? 'New' : 'used',
          sellerName : dt.sellerName,
          sellerPartnership : dt.sellerPartnership,
          sellerPhoneNumber : dt.sellerPhoneNumber,
          sellerAddress:dt.sellerAddress,
          categoryId:dt.categoryId,
          addedAgo:dt.addedAgo,
          imageLink:dt.imageLink == null ? "assets/Images/RecentProducts.png" :dt.imageLink
        } 
        this.loadProductRelatedItems(this.Product.categoryId);
  }, (error) => {  
    console.log(error)
    });
}

//load product related items
loadProductRelatedItems(categoryId:any){   
  this.productService.GetProductRelatedItems(categoryId).subscribe((data) => {
    var dt=data.data;
      for(let a = 0; a < dt.length; a++){
        let _product:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo:dt[a].addedAgo,
          imageLink:dt[a].imageLink == null ? "assets/Images/RecentProducts.png" :dt[a].imageLink
        } 
      this.RelatedProducts.push(_product);
    } 
  }, (error) => {  
    console.log(error)
    });
}
 
}
