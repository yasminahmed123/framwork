import { Component, inject } from '@angular/core';
import { ChartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

   cart:Cart ={} as Cart

  private readonly _ChartService=inject(ChartService)

  GetLoggedusercart =()=>{

    this._ChartService.GetLoggedusercart().subscribe({
      next:(res)=>{
        console.log(res)

      },error:(err)=>{console.log(err)

      }

    })
  }
  ngOnInit(): void {
 this.GetLoggedusercart()
    
  }

}
