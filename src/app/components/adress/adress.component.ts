import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../../core/services/orders.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-adress',
  standalone: true,
  imports: [ReactiveFormsModule],
templateUrl: './adress.component.html',
  styleUrl: './adress.component.scss'
})
export class AdressComponent {

   cartId :string= ''
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly    _OrdersService= inject(OrdersService)
  private readonly _route =inject(ActivatedRoute)

  Address:FormGroup = this._FormBuilder.group({
    detail:[null],
    phone:[null],
    city:[null],
  })
    payment =()=>{
          console.log(    this.Address.value)
          this._OrdersService.creatSession(this.cartId,this.Address.value).subscribe({
            next:(res)=>{
              console.log(res)
               window.location.href = res.session.url 

            },error:(err)=>{
               console.log(err)

            }
          })

    }
    ngOnInit(): void {
      this._route.paramMap.subscribe({
       next:(params)=>{
       this.cartId = params.get('id')!
      }

      })
      
    }

}
