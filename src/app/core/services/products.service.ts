import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { basUrl } from '../../enviroment/enviroment.local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) {} 
      // allproduct 
    getProducts= ():Observable<any> =>{
       return   this._HttpClient.get(basUrl+'api/v1/products') ;
    };

    //brand 
    getbrands= ():Observable<any> =>{
      return   this._HttpClient.get(basUrl+'api/v1/brands') ;
   };

    //details
    getProduct= (id:string):Observable<any> =>{
      return   this._HttpClient.get(basUrl+`api/v1/products/${id}`) ;
   };
 

  getCategory():Observable<any>{
    return this._HttpClient.get(basUrl+'api/v1/categories');
 
  }

  
  }
