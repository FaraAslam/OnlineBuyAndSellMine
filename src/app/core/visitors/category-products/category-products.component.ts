import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/visitor/category.service';
import { Category, CategorySearchfilterProduct } from '../../Models/category-model';
import { Product } from '../../Models/visitor/home-model';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';
import { AccountService } from 'src/app/services/account/account.service';
import { subCategory } from '../../Models/visitor/subcategories-model';
import { HomeService } from 'src/app/services/visitor/home.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  CategoryProducts: Product[]=[];
  categoryName:string|undefined
  constructor(private homeService:HomeService,private accountService:AccountService,private router:Router){}
ngOnInit(){
  this.  loadBrandNewProducts()
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
            imageLink: dt[a].imageLink
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
  
  }

