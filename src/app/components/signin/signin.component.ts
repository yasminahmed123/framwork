import { Component, inject } from '@angular/core';
import { signUpValidators } from '../../shared/ui/validators/register.validator';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertErrorComponent } from '../../shared/ui/alert-error/alert-error.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule ,AlertErrorComponent,RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  errorMassage :string =""

  isBtnSubmit:boolean =false
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)


  logIn= new FormGroup({
       email:new FormControl(null,signUpValidators.email),
       password:new FormControl(null, signUpValidators.password),
  
  })


  sendData(){
       this.isBtnSubmit=true
       if(this.logIn.valid){        
            this._AuthService.signin(this.logIn.value).subscribe({
               next:(res)=>{
                 if(res.message =="success"){
                      localStorage.setItem('token' , res.token)
                      this._AuthService.saveUserData()
                      this._Router.navigate(['/home'])
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
          this.logIn.markAllAsTouched()
       }
  }
}
