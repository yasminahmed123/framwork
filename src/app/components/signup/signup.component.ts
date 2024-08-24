import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorComponent } from "../../shared/ui/alert-error/alert-error.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule, AlertErrorComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
     register= new FormGroup({
          name: new FormControl(null,[Validators.required , Validators.maxLength(20),Validators.minLength(2)]),
          email:new FormControl(null,[Validators.required, Validators.email]),
          password:new FormControl(null, [Validators.required ,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?]).{8,}$/)]),
          rePassword:new FormControl(null, [Validators.required ,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?]).{8,}$/)]),
         

     })

     sendData(){
      console.log(this.register)
     }
}
