import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertErrorComponent } from "../../shared/ui/alert-error/alert-error.component";
import { confirmPassword } from '../../shared/ui/utils/confirm-password-utils';
import { signUpValidators } from '../../shared/ui/validators/register.validator';
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule, AlertErrorComponent ,NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
     errorMassage :string =""

     isBtnSubmit:boolean =false
     private readonly _AuthService = inject(AuthService)
     private readonly _Router = inject(Router)


     register= new FormGroup({
          name: new FormControl(null,signUpValidators.name),
          email:new FormControl(null,signUpValidators.email),
          password:new FormControl(null, signUpValidators.password),
          rePassword:new FormControl(null,signUpValidators.rePassword),
     

     },confirmPassword)

   
     sendData(){
          this.isBtnSubmit=true
          if(this.register.valid){        
               this._AuthService.signUp(this.register.value).subscribe({
                  next:(res)=>{
                    if(res.message =="success"){
                         this._Router.navigate(['/signin'])
                         this.isBtnSubmit = false

                     }
                  }
               
               ,error :(err:HttpErrorResponse) =>{
                       console.log(err.error.message)
                    this.errorMassage=err.error.message
                       this.isBtnSubmit=false
                    }
               })
          
          }else{
             this.register.get('rePassword')?.setValue(null)
             this.register.markAllAsTouched()
          }
     }
}
