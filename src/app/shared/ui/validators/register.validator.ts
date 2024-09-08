import { Validators } from "@angular/forms";



export const signUpValidators={

    name:[Validators.required , Validators.maxLength(20),Validators.minLength(2)],
    email:[Validators.required, Validators.email],
    password:[Validators.required ,Validators.pattern(/^\w{6,}$/)],
    rePassword: [Validators.required ,Validators.pattern(/^\w{6,}$/)]
}