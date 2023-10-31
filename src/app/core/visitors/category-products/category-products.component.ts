import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Products } from '../../Models/visitor/home-model';
import { AccountService } from 'src/app/services/account/account.service';
import { subCategory } from '../../Models/visitor/subcategories-model';
import { HomeService } from 'src/app/services/visitor/home.service';
import Swal from 'sweetalert2';
import { CategorySearchfilterProduct, SubCategory } from '../../Models/category-model';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';
import { CategoryService } from 'src/app/services/visitor/category.service';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  CategoryProducts: Product[]=[];
  categoryName:string|undefined;
  categoryId:any;
  subCategoryId:any;
  ProductDetails:Product[]=[];
  selectedStatus: boolean | null = null;
  searchKey: string = '';
  subCategories:Product[]=[];
  constructor(private homeService:HomeService,private accountService:AccountService,
    private router:Router,private route:ActivatedRoute,private subCategoriesService:SubCategoriesService,private subCategoryService:SubCategoriesService){}


  ngOnInit():void{
  const routeParams = this.route.snapshot.paramMap;
  this.categoryId = routeParams.get('categoryId');
  this.subCategoryId = routeParams.get('subCategory');

  if (this.categoryId == 'new') {
    this.loadBrandNewProducts()
    var formElement2 = <HTMLFormElement>document.getElementById('option');
    formElement2.style.display = 'none'
  }
  else if (this.categoryId == 'old') {
    this.loadUsedProducts();
    var formElement2 = <HTMLFormElement>document.getElementById('option');
    formElement2.style.display = 'none'
  }
  else if (this.subCategoryId == 'category') {
    this.loadCategoryProducts();
  }
  else if (this.categoryId == 'Subcategory') {
    this.loadSubCategoryProducts()
  }
}
  //AllBrandNewProducts
  loadBrandNewProducts(){   
    this.CategoryProducts= []
    debugger
    this.homeService.GetBrandNewProductsForHomePage().subscribe((data) => {
      var dt=data.data;
      debugger
        for(let a = 0; a < dt.length; a++){
          let _product:Product={
            productId: dt[a].productId,
            name: dt[a].name,
            description: dt[a].description,
            howYearOld: dt[a].howYearOld,
            price: dt[a].price,
            createdAt: dt[a].createdAt,
            addedAgo: dt[a].addedAgo,
            isInUserWishList: dt[a].isInUserWishList,
            imageLink: dt[a].imageLink,
            categoryName: dt[a].categoryName,
            wishListId: dt[a].wishListId
          } 
        this.CategoryProducts.push(_product);
      } 
      this.categoryName= 'New Products'
    }, (error) => {  
      if(error.status==401){
        this.accountService.doLogout();
        this.router.navigateByUrl('/'); 
      }
      console.log("Error in getOperative: " + error.message);
      });
  }

  loadUsedProducts(): void {
    this.homeService.GetUsedProductsForHomePage().subscribe((data) => {
     
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let ProductDetails:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          isInUserWishList: dt[a].isInUserWishList,
          imageLink: dt[a].imageLink,
          categoryName: dt[a].categoryName,
          wishListId: dt[a].wishListId
        }
        this.ProductDetails.push(ProductDetails);
      }
      this.categoryName = 'Used Products'
    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/');
      }
    });}
   loadCategoryProducts() {
    this.categorySearchfilterProduct.searchKey = this.searchKey;
    this.categorySearchfilterProduct.isOld = this.selectedStatus;

    this.subCategoriesService.GetSubCategoryProducts(this.categoryId, this.categorySearchfilterProduct).
    subscribe((result) => {
   var dt = result.data.products;
   this.categoryName = result.data.categoryName
      for (let a = 0; a < dt.length; a++) {
        let Category: Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          isInUserWishList: dt[a].isInUserWishList,
          imageLink: dt[a].imageLink,
          categoryName: dt[a].categoryName,
          wishListId: dt[a].wishListId
        }
        this.subCategories.push(Category);

      }
    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/');
      }
    });
  }

  

    loadSubCategoryProducts() {
      this.categorySearchfilterProduct.searchKey = this.searchKey;
      this.categorySearchfilterProduct.isOld = this.selectedStatus;
      this.subCategoryService.GetSubCategoryProducts(this.subCategoryId, this.categorySearchfilterProduct).subscribe((result) => {
        var dt = result.data.products;
        this.categoryName = result.data.categoryName
        this.CategoryProducts = [];
        for (let a = 0; a < dt.length; a++) {
          let _subCategory: Product = {
            productId: dt[a].productId,
            name: dt[a].name,
            description: dt[a].description,
            howYearOld: dt[a].howYearOld,
            price: dt[a].price,
            createdAt: dt[a].createdAt,
            addedAgo: dt[a].addedAgo,
            wishListId: dt[a].wishListId,
            categoryName: dt[a].categoryName,
            imageLink: dt[a].imageLink == null ? "assets/Images/RecentProducts.png" : dt[a].imageLink,
            isInUserWishList: false
          }
        this.categoryName = _subCategory.categoryName + ' / ' + result.data.categoryName
        this.CategoryProducts.push(_subCategory);
      }
    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/');
      }
    });
  }
  categorySearchfilterProduct: CategorySearchfilterProduct = {
    searchKey: '',
    isOld: null
  }
  productDetail(img: any, description: any, ProductId: any) {
    Swal.fire({
      imageUrl: img,
      imageWidth: 700,
      imageHeight: 500,
      width: '800px',
      title: 'Description',
      html: description,
      showCancelButton: true,
      confirmButtonText: 'More Detail...',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/product-details', ProductId]);
      }
    });
  }
  }

