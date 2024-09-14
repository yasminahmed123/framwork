import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private readonly   _ChartService=inject(ChartService)

  allProducts:Product[]=[];
  constructor(private _ProductsService:ProductsService){}
  private readonly toastr= inject(ToastrService)

  getProducts=()=>{
    this._ProductsService.getProducts()
      .subscribe({
        next:(res)=>{this.allProducts= res.data;},
        error:(error)=>{}
      });
    
  };

   // add to chart 
   addToCart =(productId: string )=>{
     

    this._ChartService.addproductToCart(productId).subscribe({
     next:(res: any)=>{
      this._ChartService.cartCounter.next(res.numOfCartItems)
       this.toastr.success("product add successfully")
     }

     ,error:(err: any)=>{
       console.log(err)
     }

    })
   }

  ngOnInit(): void {
    this.getProducts()
  }

}
