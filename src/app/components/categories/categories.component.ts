import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {


  // constructor( private _ProductService:ProductService  ){}

  // categoryData : Category[] = [];
  // ngOnInit(): void {
  //     this._ProductService.getCategory().subscribe({
  //       next:(res)=>{
  //         console.log(res);
          
  //         this.categoryData = res.data;
  //       },
  //       error:(err)=>{
  //         console.log(err);
          
  //       }
  //     })
  // }
}
