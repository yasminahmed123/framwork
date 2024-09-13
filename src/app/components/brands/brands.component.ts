import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Brand } from '../../core/interfaces/cart';


@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink,HttpClientModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  brandData: Brand[] = [];
  constructor(private _ProductService: ProductsService) {}

  ngOnInit(): void {
    this._ProductService.getbrands().subscribe({
      next: (res) => {
        console.log(res);
        console.log(  this.brandData = res.data)

   
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
