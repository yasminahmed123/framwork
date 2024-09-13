import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basUrl } from '../../enviroment/enviroment.local';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) {} 
    
  creatSession= (cartId :string ,shippingAddress :object):Observable<any> =>{
       return   this._HttpClient.post(basUrl+'api/v1/orders/checkout-session/'+cartId +"url=http://localhost:4200",{ shippingAddress} , {
         headers:{
          token :localStorage.getItem('token')!
         }

       }) ;
    };

}
