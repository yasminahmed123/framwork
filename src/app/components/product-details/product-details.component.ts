import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private readonly _ActivatedRoute =inject(ActivatedRoute)
  ngOnInit(): void {
  
       this._ActivatedRoute.paramMap.subscribe({
        next:(param)=>{
          console.log(param.get('id'))
          console.log(   this._ActivatedRoute.snapshot.params)
        
        },error :(err)=>{
           console.log(err)

        }
       })
  }

}
