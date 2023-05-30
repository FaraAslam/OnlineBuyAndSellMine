import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository/repository.service';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
 //api/Location/get-province-list
  constructor(private router:Router , private repositoryService:RepositoryService) { }
  GetProvince() {
    return this.repositoryService.get('Location/get-province-list',true)
         .pipe(map((response: any) => {
              return response;
    }));
}
//api/Location/get-province-cities/{provinceId}

getCitiesLists(provinceId:any){
   
  return this.repositoryService.get('Location/get-province-cities/'+provinceId,true)
       .pipe(map((response: any) => {
            return response;
  }));
}
}
