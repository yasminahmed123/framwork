import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../../core/services/my-translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cancelSubscription :Subscription =new Subscription()

  counter:number=0; 
 private readonly _ChartService= inject(ChartService)
  private readonly      _MyTranslateService=inject(MyTranslateService)    //translate 
   readonly      _TranslateService=inject(TranslateService)    


 ngOnInit(): void {
    this._MyTranslateService.changeDirection()    

  this.cancelSubscription =           this._ChartService.cartCounter.subscribe({
  next:(counter)=>{
    this.counter =counter
  }
})




 }


 selectLang(lang:string){

  this._MyTranslateService.selectLang(lang)
 }



 ngOnDestroy(): void {
this.cancelSubscription.unsubscribe()
 }
 


}

