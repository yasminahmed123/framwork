import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
     let spinner= inject(NgxSpinnerService)       // هنعمل import serivce 
     spinner.show("spin1")                        // هنعرض spin 

  return next(req).pipe(finalize(()=>{             //  بتاخد arrow  function 
          
    spinner.hide("spin1")                        // هنبدا  نعمل  اخفاء 
  }));
};
