import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { province } from '../../Models/location model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent {
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<province>;
  province: province[]=[];
constructor(private locationService:LocationService){}
ngOnInit(){
  this.loadProvinceList()
}
loadProvinceList(): void {
  debugger
  this.locationService.GetProvince().subscribe((data) => {

    var dt = data.data;
    for (let a = 0; a < dt.length; a++) {
      let province: province = {
        name: dt[a].name,
        provinceId:dt[a].provinceId, 
      }
      this.province.push(province);
    }
    this.dataSource = new MatTableDataSource(this.province);
  }, (error) => {
    console.log(error)
  });
 }
// name(categoryId: any, name: any) {
//   throw new Error('Method not implemented.');
// }
 }
