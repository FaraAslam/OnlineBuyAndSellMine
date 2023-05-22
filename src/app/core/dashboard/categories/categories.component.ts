import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/visitor/category.service';
import { Category } from '../../Models/category-model';
import { Product } from '../../Models/visitor/home-model';

export interface PeriodicElement {
  name: string;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Pets', symbol: '' },
  { name: 'Bags', symbol: '', },
  { name: 'shoes', symbol: '' },
  { name: 'Jewelry', symbol: '' },
  { name: 'Makeup', symbol: '' },
  { name: 'Dresses', symbol: '' },
  { name: 'Electronics', symbol: '' },
  { name: 'Home decor', symbol: '' },

];
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],

})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  Category: unknown[] | undefined;
  Categories: Category[] = [];
  categoryId: any;
  categorySearchfilterProduct: object;
  selectedStatus: any;
  getSave(save: any) {
    alert("Save")
  }
  dataSource: MatTableDataSource<Category>;
  constructor(private categoryService: CategoryService) { }
  ngOnInit() {
    this.loadCategoryList()
  }
  loadCategoryList() {
    debugger
    this.categoryService.GetCategories().subscribe((data) => {

      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let _category: Category = {
          name: dt[a].name,
          categoryId: dt[a].categoryId,
        }
        this.Categories.push(_category);
      }
      this.dataSource = new MatTableDataSource(this.Categories);
    }, (error) => {
      console.log(error)
    });
  }
  name(categoryId: any, name: any) {
    throw new Error('Method not implemented.');
  }
}
