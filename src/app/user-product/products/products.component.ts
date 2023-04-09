import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private router:Router) {  }
  searchKey: any = '';
  onKeyUp(data: any) {
    if (data.key == 'Enter') {
      this.router.navigateByUrl('search/' + this.searchKey);
    }
  }
}
