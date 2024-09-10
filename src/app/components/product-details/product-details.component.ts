import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  product!: Product;
  private readonly _ProductsService =inject(ProductsService)
  private readonly _ActivatedRoute =inject(ActivatedRoute)
  ngOnInit(): void {
        let id:string |any =""
       this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{
          console.log(param.get('id'))
          id = param.get('id')
        
        }
       })

       
       this._ProductsService.getProduct(id).subscribe({
          next:(res)=>{
            console.log(res.data)
            this.product =res.data
          }

       })
  }

}
