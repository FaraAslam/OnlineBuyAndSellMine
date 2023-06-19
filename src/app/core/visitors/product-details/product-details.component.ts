import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/visitor/product.service';
import { Product, ProductDetails } from '../../Models/visitor/home-model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductItems } from '../../Models/product-model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  ProductDetail: ProductDetails = {
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
  categoryId: any;
  ProductItems:ProductItems[]=[];
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('productId');
 
    this.loadProductDetailsList();
  }

  loadProductDetailsList() {
   
    console.log('details')
    this.productService.GetAllProductDetials(this.productId).subscribe((data) => {

      var dt = data.data;

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
        createdBy: dt.createdBy,
      
      }
      this.loadRelatedProducts(this.ProductDetail.categoryId);
    }, (error: any) => {
      console.log(error)
    });
  }
  loadRelatedProducts(categoryId:any): void {
    debugger
    this.productService. GetRelatedProducts(categoryId).subscribe((data) => {
      debugger
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let ProductItem: ProductItems = {
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
          isOld: dt[a].isOld,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          location: dt[a].location,
          productImages: dt[a].productImages,
          sellerWhatsAppNumber:dt[a].sellerWhatsAppNumber,
        }
        this.ProductItems.push(ProductItem);
      }
      // this.dataSource = new MatTableDataSource(this.RecentProducts);
    }, (error) => {
      console.log(error)
    });
  }
}