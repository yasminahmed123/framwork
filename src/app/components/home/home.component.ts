import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { AuthService } from '../../core/services/auth.service';
import { SliderComponent } from "../slider/slider.component";
import { CategoriesSliderComponent } from "../category-slider/categories-slider.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoriesSliderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

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
  ngOnInit(): void {
    this.getProducts()
  }

}
