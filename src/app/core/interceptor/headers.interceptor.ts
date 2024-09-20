import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

     if(req.url.includes('cart') || req.url.includes('categories')){           //  بنحدد مكان اللي عاوزين يظهر فية token 

      req = req.clone({
        setHeaders :{
            token:localStorage.getItem('token')!
    
        }
      })
      
     }

   
  
  return next(req);
};
