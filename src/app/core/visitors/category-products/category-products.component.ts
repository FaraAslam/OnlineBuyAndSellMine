import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/visitor/category.service';
import { CategorySearchfilterProduct } from '../../Models/category-model';
import { Product } from '../../Models/visitor/home-model';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  productsType: string= 'All';
  selectedStatus: boolean | null;
  categoryId:any;
  searchKey:any;
  isOld:boolean | null;
  constructor(private router: Router,private categoryService: CategoryService, private route: ActivatedRoute)  {
   
  }
  categorySearchfilterProduct :CategorySearchfilterProduct={
    searchKey: '',
    isOld: null
  }
  valueChange(event: any){
    debugger
   this.selectedStatus = event.target.value ;
   this.onOptionsSelected(this.selectedStatus);
  }
  onOptionsSelected(data: any) {
    debugger
    if(data == 'brandNew')
    this.selectedStatus = false;
    else if(data == 'used')
    {
      this.selectedStatus = true;
    }
    else{
      this.selectedStatus = null;
    }
    this.loadCategoryProducts()

  }
  CategoryProducts: Product[]=[];
  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = routeParams.get('categoryId');
    this.loadCategoryProducts();
}

//load product related items
loadCategoryProducts(){   
  this.categoryId = 'a10eaab3-890c-492b-9f20-9c000f2d99bb';
  this.categorySearchfilterProduct.searchKey = 'null';
  this.categorySearchfilterProduct.isOld = this.selectedStatus;

  this.categoryService.GetCategoryProducts(this.categoryId,this.categorySearchfilterProduct).subscribe((data) => {
    debugger
    var dt=data.data;
    this.CategoryProducts = [];
      for(let a = 0; a < dt.length; a++){
        let _product:Product={
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          imageLink:dt[a].imageLink == null ?"assets/Images/RecentProducts.png" : dt[a].imageLink
        } 
      this.CategoryProducts.push(_product);
    } 
  }, (error) => {  
    console.log(error)
    });
}
}
