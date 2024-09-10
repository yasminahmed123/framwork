import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { AuthService } from '../../core/services/auth.service';
import { SliderComponent } from "../slider/slider.component";
import { CategoriesSliderComponent } from "../category-slider/categories-slider.component";
import { RouterLink } from '@angular/router';
import { ChartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoriesSliderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
     private readonly   _ChartService=inject(ChartService)
     private readonly   toastr=inject(ToastrService)

  allProducts:Product[]=[];
  constructor(private _ProductsService:ProductsService , private token :AuthService){
    this.token.saveUserData()
  }

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
      next:(res)=>{
        console.log(res)
        this.toastr.success("product add successfully",'',{
          progressBar :true ,
          progressAnimation: 'increasing'
        })
      }

      ,error:(err)=>{
        console.log(err)
      }

     })
    }


  ngOnInit(): void {
    this.getProducts()
  }

}
