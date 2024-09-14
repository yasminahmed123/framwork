import { Component, inject } from '@angular/core';
import { ChartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
updateProductQTY(arg0: string,arg1: number) {
throw new Error('Method not implemented.');
}
  private readonly   toastr=inject(ToastrService)

   cart:Cart ={} as Cart
   isLoading :boolean =true 

  private readonly _ChartService=inject(ChartService)

  GetLoggedusercart =()=>{

    this._ChartService.GetLoggedusercart().subscribe({
      next:(res)=>{
        console.log(res)
        this.cart =res
        this.isLoading =false 

      },error:(err)=>{console.log(
         this.isLoading =false 
        
      )

      }

    })
  }
product: any;

deleteItem=(productId:string)=>{
   this._ChartService.removeItem(productId).subscribe({
      next:(res)=>{
        this._ChartService.cartCounter.next(res.numOfCartItems)
         console.log(res)
          this.cart = res
          this.toastr.success("product deleted successfully",'',{
            progressBar :true ,
            progressAnimation: 'increasing'
          })
      },error:(err)=>{
        console.log(err)
      }
     
   })
}


updateQTY=(productId:string ,count:number )=>{
  this._ChartService.updateProductQTY(productId,count).subscribe({
     next:(res)=>{
     
       
         this.cart = res
         this.toastr.success("product updated successfully",'',{
           progressBar :true ,
           progressAnimation: 'increasing'
         })
     },error:(err)=>{
       console.log(err)
     }
    
  })
}



  ngOnInit(): void {
 this.GetLoggedusercart()
    
  }

}
