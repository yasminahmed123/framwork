import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signUpValidators } from '../../shared/ui/validators/register.validator';
import { AlertErrorComponent } from "../../shared/ui/alert-error/alert-error.component";
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule, AlertErrorComponent],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'] // تم التعديل إلى styleUrls
})
export class ForgetPasswordComponent {
  cancelSubscription :Subscription =new Subscription()

  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);

  step: number = 1;

  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, signUpValidators.email),
  });

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]{6}$/)]),
  });

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, signUpValidators.email),
    newPassword: new FormControl(null, signUpValidators.password),
  });

  verfiyEmailSubmit(): void {
 this.cancelSubscription =   this._AuthService.SetEmailVerify(this.verifyEmail.value).subscribe({

      next:(res)=>{
        console.log(res)
        if(res.statusMsg ==='success'){
            this.step=2;

        }
      },error :(err)=>{
          console.log(err)
      }
    })
  }

  verfiyCodeSubmit(): void {
    this._AuthService.verifyCode(this.verifyCode.value).subscribe({

      next:(res)=>{
        console.log(res)
        if(res.status ==='Success'){
            this.step=3;

        }
      },error :(err)=>{
          console.log(err)
      }
    })
  }


  resetPasswordSubmit(): void {
    this._AuthService.resetPassword(this.resetPassword.value).subscribe({

      next:(res)=>{
        console.log(res)
        localStorage.setItem('userToken' , res.token)
        this._AuthService.saveUserData();
        this._Router.navigate(['/home'])
      },error :(err)=>{
          console.log(err)
      }
    })
  }


  ngOnDestroy(): void {
this.cancelSubscription.unsubscribe()
  }
}
