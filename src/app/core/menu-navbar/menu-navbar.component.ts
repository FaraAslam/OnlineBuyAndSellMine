import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuNavbarService } from 'src/app/services/menu-navbar/menu-navbar.services';
import { Category, SubCategory } from '../Models/category-model';
import { AccountService } from 'src/app/services/account/account.service';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css'],
})
export class MenuNavbarComponent implements OnInit {
  ShowSeeAll = false;
  Categories: Category[] = [];
  subCategories: SubCategory[] = [];
  loading: boolean = false;
  UserId: any = '';
  IsCurrentUser: boolean = false;
  SubCategoriesData: any[] = [];
  categoryId: any = '';
  loadDefualt: any;
  categoryName: string = '';
  constructor(
    private subCategoriesService: SubCategoriesService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAllCategory();
  }
  loadAllCategory() {
    this.loading = true;
    this.subCategoriesService.GetCategories().subscribe(
      (data) => {
        var dt = data.data;
        for (let a = 0; a < dt.length; a++) {
          let _mainCategory: Category = {
            categoryId: dt[a].categoryId,
            name: dt[a].name,
          };
          if (a < 5) {
            this.loadSubCategories(_mainCategory.categoryId);
            this.Categories.push(_mainCategory);
          }
          if (a == 5) {
            this.ShowSeeAll = true;
          }
        }
        this.loading = false;
      },
      (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/');
        }
      }
    );
  }
  loadSubCategories(data: any) {
    this.subCategories = [];
    this.subCategoriesService.GetSubCategoriesById(data).subscribe((data) => {
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let subCategory: SubCategory = {
          name: dt[a].name,
          categoryName: dt[a].catagoryName,
          categoryId: dt[a].categoryId,
          subCategoryId: dt[a].subCategoryId,
        };
        this.subCategories.push(subCategory);
      }
      this.getSubCategory(this.loadDefualt);
    });
  }
  getSubCategory(data: any) {
    this.SubCategoriesData = [];
    for (let a = 0; a < this.subCategories.length; a++) {
      if (data == this.subCategories[a].categoryId) {
        this.SubCategoriesData.push(this.subCategories[a]);
      }
    }
  }
}
