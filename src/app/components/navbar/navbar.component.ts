import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cancelSubscription :Subscription =new Subscription()

  counter:number=0; 
 private readonly _ChartService= inject(ChartService)

 ngOnInit(): void {
  this.cancelSubscription =           this._ChartService.cartCounter.subscribe({
  next:(counter)=>{
    this.counter =counter
  }
})
 }
 ngOnDestroy(): void {
this.cancelSubscription.unsubscribe()
 }
 
}
