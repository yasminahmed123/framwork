import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basUrl } from '../../enviroment/enviroment.local';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private readonly _Router = inject(Router)

  
  constructor(private _HttpClient:HttpClient) {} 

    signUp= (user:object):Observable<any> =>{
       return   this._HttpClient.post(basUrl+'api/v1/auth/signup',user) ;
    };

    signin= (user:object):Observable<any> =>{
      return   this._HttpClient.post(basUrl+'api/v1/auth/signin',user) ;
   };
   saveUserData=()=>{
    let token = localStorage.getItem('token')
    if(token){
      
      try{  let decodeed =jwtDecode(token)
        console.log(decodeed)}
        catch(error){
      this.     _Router.navigate(['signin'])
          localStorage.clear()}
      
    
    }

   }


   SetEmailVerify(user:object):Observable<any>{
    return this._HttpClient.post(basUrl+'api/v1/auth/forgotPasswords',user) }

    
    verifyCode(user:object):Observable<any>{
    return this._HttpClient.post(basUrl+'api/v1/auth/verifyResetCode',user) }

    
    resetPassword(user:object):Observable<any>{
    return this._HttpClient.put(basUrl+'api/v1/auth/resetPassword',user) }
  }