import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/visitor/product.service';
import { Product, ProductDetails, ProductImage } from '../../Models/visitor/home-model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductItems } from '../../Models/product-model';
import { AccountService } from 'src/app/services/account/account.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ProductDetail: ProductDetails = {
    productId: undefined,
    createdAt: undefined,
    isOld: false,
    sellerName: '',
    sellerPhoneNumber: '',
    sellerPartnership: 0,
    condition: '',
    sellerAddress: '',
    categoryId: undefined,
    addedAgo: '',
    createdBy: '',
    imageLink: '',
    isInUserWishList: false,
    imageLinks: []=[],
    subCategoryId: '',
    whatsAppNumber: 0,
    name: '',
    description: '',
    howYearOld: 0,
    price: 0,
    sellerProfileImage: ''
  };
  productId: string | null;
  categoryId: any;
  userId:string | null;
  ProductItems:ProductItems[]=[];
  wishlistProducts: Product[]=[];
  wishlistId: string='';
  errorMessage: any="";
  UserId:any="";
  index: any=1;
  show:any=true;
  images: any[]=[];
  mainImg: string="";
  RelatedProducts: Product[]=[];

  constructor(private productService: ProductService, private router: Router, 
    private route: ActivatedRoute,private accountService:AccountService) {
      const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('productId');
    this.UserId = this.accountService.getUserId();
     }
 
  ngOnInit():void {
    
    this.loadProductDetailsList();
    if(this.userId!==null){
      this.GetUserWishListProduct()
    }
  }

  loadProductDetailsList() {
    this.productService.GetAllProductDetials(this.productId).subscribe((data) => {
      var dt = data.data;
  
      var productImages: ProductImage[] = [];
      for (var a = 0; a < dt.images.length; a++) {
        var productImage: ProductImage = {
          orderNumber: dt.images[a].orderNumber,
          imageLink: dt.images[a].imageLink  == null ? './assets/Images/dummy.png' : dt.images[a].imageLink,
          productMediaId: dt.images[a].productMediaId,
        };
       productImages.push(productImage);
      }
      this.ProductDetail = {
        productId: dt.productId,
        name: dt.name,
        description: dt.description,
        howYearOld: dt.howYearOld,
        price: dt.price,
        createdAt: dt.createdAt,
        isOld: dt.isOld,
        sellerName: dt.sellerName,
        sellerPhoneNumber: dt.sellerPhoneNumber,
        sellerPartnership : dt.sellerCreatedAt,
        condition: dt.isOld == false ? 'New' : 'used',
        sellerAddress: dt.location,
        categoryId: dt.categoryId,
        addedAgo: dt.addedAgo,
        createdBy: dt.createdBy,
        imageLink:dt.imageLink == null ? "assets/Images/RecentProducts.png" :dt.imageLink,
        isInUserWishList: dt.isInUserWishList,
        imageLinks:productImages,
        subCategoryId: dt.subCategoryId,
        whatsAppNumber: dt.whatsAppNumber,
        sellerProfileImage:dt.sellerProfileImage,
      }
      this.mainImg= this.ProductDetail.imageLink
        this.images=this.ProductDetail.imageLinks
        if(this.images.length<=1){
          this.show=false
        }
   
      this.loadRelatedProducts(this.ProductDetail.categoryId);

    }, (error: any) => {
      console.log(error)
    });
  }
  changeImg(data: any) {
    if(this.index>=this.images.length||this.index<0){
       this.index=0
      
     }
     if(data!=1&&data!=2){
       this.mainImg = data;
     this.mainImg;
     }
     if(data==2){
       this.mainImg=this.images[this.index].imageLink;
       this.index++;;
     }
     if(data==1){
       this.mainImg=this.images[this.index].imageLink
       this.index--;;
     }
     console.warn("function called");
    }
  loadRelatedProducts(categoryId:any): void {
    this.ProductItems=[];
    this.productService. GetRelatedProducts(categoryId).subscribe((data) => {
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
  GetUserWishListProduct(){ 
    debugger 
    this.productService.GetUserWishListProduct(this.userId).subscribe((data) => {
      var dt=data.data.productList;
      this.wishlistProducts = [];
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
        this.wishlistProducts.push(_product);
      }
    }, (error) => {  
      });
  }
  
  addToWishlist(productId:any){
    this.productService.addProductIntoUserWishList(productId, this.UserId).subscribe((dt) => {
      this.loadRelatedProducts(this.ProductDetail.categoryId);
      this.loadProductDetailsList()
      this.GetUserWishListProduct()
      },
      (error) => {
        this.errorMessage = ' Validation failed.';
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/login');
        }
      }
    ); 
  }
  removeToWishList(wishlistId:any){
    for(let i=0;i<=this.wishlistProducts.length;i++){
      if(wishlistId==this.wishlistProducts[i].productId){
        this.wishlistId=this.wishlistProducts[i].wishListId
        this.productService.removeProductIntoUserWishList(this.wishlistId).subscribe(
          (dt) => {
            this.loadProductDetailsList()
          },
          (error) => {
            this.errorMessage = error.message;
            if (error.status == 401) {
              this.accountService.doLogout();
              this.router.navigateByUrl('/login');
            }
          }
        );
        this.wishlistId=''
        break;
      }
    }
  }

  copyLink(){
    console.log(this.route.url);
    var shareButton = document.getElementById("share-button");
      // Copy the URL to the clipboard
      navigator.clipboard.writeText(window.location.href);
      // Share the URL
      navigator.share({
        title: document.title,
        url: window.location.href
      }).then(() => {
        console.log('URL shared successfully.');
      }).catch((error) => {
        console.error('Error sharing URL:', error);
      });
  
  }
  openImg(img:any){
    Swal.fire({
      imageUrl:  (img),
      imageWidth:800,
      imageHeight: 600,
      width: '100%',
    })
  }
  fullImage(){
    let fullscreen = document.querySelector(".img");
    if (!document.fullscreenElement) {
      fullscreen?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

scrollWin(target:any) {
  target.scrollBy({
    left: -400,
    behavior: "smooth",
  });
}
scrollWin2(target:any) {
  target.scrollBy({
    left: 400,
    behavior: "smooth",
  });
}
}