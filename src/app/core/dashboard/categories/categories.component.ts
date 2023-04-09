import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


export interface PeriodicElement {
  name: string;
 symbol:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Pets',symbol:''},
  { name: 'Bags',symbol:'',},
  { name: 'shoes',symbol:''},
  { name: 'Jewelry',symbol:''},
  { name: 'Makeup',symbol:''},
  { name: 'Dresses',symbol:''},
  { name: 'Electronics',symbol:''},
  { name: 'Home decor',symbol:''},
 
];
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  
})
export class CategoriesComponent {
  displayedColumns: string[] = [ 'name'];
  dataSource = ELEMENT_DATA;
  getsave(save:any){
    alert("Save")
  }
 
}
