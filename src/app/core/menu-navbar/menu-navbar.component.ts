import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuNavbarService } from 'src/app/services/menu-navbar/menu-navbar.services';
import { Category } from '../Models/category-model';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent implements OnInit {
  
   
  Categories:Category[]=[];
  Category : Category={
  categoryId: '',
  name: '',
  }
  constructor(private router: Router,private menuNavbarService: MenuNavbarService) { }
  ngOnInit(): void {
    this.loadAllCategory();
  }
    //AllCategoies
loadAllCategory(){   
  this.menuNavbarService.GetCategories().subscribe((data) => {
    debugger
    var dt=data.data;
      for(let a = 0; a < dt.length; a++){
        let _maincategory:Category={ 
          categoryId: dt[a].mainCategoryId,
          name:dt[a].name,
        } 
      this.Categories.push(_maincategory);
    } 
  }, (error) => {  
    console.log(error)
    });
}

}
