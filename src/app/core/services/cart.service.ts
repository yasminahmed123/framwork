import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { basUrl } from '../../enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  updateItem(productId: string) {
    throw new Error('Method not implemented.');
  }
   cartCounter: BehaviorSubject<number> = new BehaviorSubject(0)


  headers = { token :localStorage.getItem('token')!}
  constructor(private _HttpClient:HttpClient) {} 
      //addproductToCart
    addproductToCart= (productId:string):Observable<any> =>{
       return   this._HttpClient.post(basUrl+'api/v1/cart',{ productId},{
        headers:{
        ...this.headers
        }

       }) ;
    };

    //Update cart product quantity
    updateProductQTY = (productId: string, count: number): Observable<any> => {
      return this._HttpClient.put(basUrl + 'api/v1/cart/'+ 
         productId, {count }, 
        {
          headers: {
            ...this.headers
          }
        }
      );
    };

   //Remove specific cart Item
   removeItem= (productId:string):Observable<any> =>{
    return   this._HttpClient.delete(basUrl+'api/v1/cart/'+productId,{
     headers:{
     ...this.headers
     }

    }) ;
 };

 //Clear user cart
 clearCart= ():Observable<any> =>{
  return   this._HttpClient.delete(basUrl+'api/v1/cart/',{
   headers:{
   ...this.headers
   }

  }) ;
};
//Get Logged user cart

GetLoggedusercart= ():Observable<any> =>{
  return   this._HttpClient.get(basUrl+'api/v1/cart/',{
   headers:{
   ...this.headers
   }

  }) ;
};


}
