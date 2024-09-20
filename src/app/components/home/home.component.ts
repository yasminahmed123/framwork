import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { AuthService } from '../../core/services/auth.service';
import { SliderComponent } from "../slider/slider.component";
import { CategoriesSliderComponent } from "../category-slider/categories-slider.component";
import { RouterLink } from '@angular/router';
import { ChartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Subscriber, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SoldOutPipe } from '../../core/pipes/sold-out.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoriesSliderComponent,
    RouterLink ,DatePipe,SoldOutPipe,SearchPipe,FormsModule,NgxSpinnerModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  Term:string =""
  cancelSubscription :Subscription =new Subscription()
     private readonly   _ChartService=inject(ChartService)
     private readonly   toastr=inject(ToastrService)
      
  allProducts:Product[]=[];
    term: any;
  constructor(private _ProductsService:ProductsService , private token :AuthService, 
    // private spinner: NgxSpinnerService
  ){
    this.token.saveUserData()
  }

  getProducts=()=>{
    // this.spinner.show("spin1")
   this.cancelSubscription = this._ProductsService.getProducts()
      .subscribe({
        next:(res)=>{this.allProducts= res.data;
          // this.spinner.hide("spin1")

        },
        error:(error)=>{}
      });
    
  };

  // add to chart 
    addToCart =(productId: string )=>{
     

      this.cancelSubscription =    this._ChartService.addproductToCart(productId).subscribe({
      next:(res)=>{
        this._ChartService.cartCounter.next(res.numOfCartItems)
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


  ngOnDestroy(): void {
  this.cancelSubscription.unsubscribe()
  }
}
