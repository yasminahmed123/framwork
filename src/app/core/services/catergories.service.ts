import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basUrl } from '../../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class CatergoriesService {
  constructor(private _HttpClient:HttpClient) {} 

    getCatergories= ():Observable<any> =>{
       return   this._HttpClient.get(basUrl+'api/v1/categories') ;
    };
  
}
