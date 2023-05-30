import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';
import { Cities } from '../../Models/location';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  provinceId: any;
  Cities: Cities[] = [];
  getSave(save: any) {
    alert("Save")
  }
  dataSource: MatTableDataSource<Cities>;
 constructor(private router:Router ,private route: ActivatedRoute , private locationService:LocationService){}
 ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
  this.provinceId = routeParams.get('provinceId')
    debugger
    this.loadCitiesList()
 
 }
  loadCitiesList() {
    debugger
    this.locationService.getCitiesLists(this.provinceId).subscribe((data) => {
      console.log(data)
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let Cities: Cities = {
          name: dt[a].name,
          cityId: dt[a].cityId,
          provinceName:dt[a]. provinceName,
        }
        this.Cities.push(Cities);
      }
      this.dataSource = new MatTableDataSource(this.Cities);
    }, (error) => {
      console.log(error)
    });
  }
  name(provinceId: any, name: any) {
    throw new Error('Method not implemented.');
  }
}

