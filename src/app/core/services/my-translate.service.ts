import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  constructor( private translateService: TranslateService) { 

     //get cuttent lang 
    const savedLang = localStorage.getItem('lang')|| 'en'

    //set default  lang '
    this.translateService.setDefaultLang(savedLang)
    //  to use
    this.translateService.use(savedLang)

    this.changeDirection()     //  direction 
  

  }

   //  تغييير الاتجاة 
    changeDirection(){
      const savedLang = localStorage.getItem('lang')|| 'en'

      if(savedLang == "en"){
         document.documentElement.dir ='ltr'      //direction 
          document.documentElement.lang ='en'    //  seo 

      }else if (savedLang == "ar"){

        document.documentElement.dir ='rtl'      //direction 
        document.documentElement.lang ='ar'    //  seo 
      }
    }

    ///  select language
    selectLang( lang :string){
     this.translateService.setDefaultLang(lang)
     this.translateService.use(lang)
     localStorage.setItem('lang' ,lang)
     this.changeDirection()
    }
}
