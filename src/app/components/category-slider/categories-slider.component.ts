import { Component, inject } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { CatergoriesService } from '../../core/services/catergories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories-slider',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.scss'
})
export class CategoriesSliderComponent {

  cancelSubscription :Subscription =new Subscription()
  categories :any =[]
  private  readonly _CatergoriesService    =inject(CatergoriesService)
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin :10,
    navText: ['', ''],
    autoplayTimeout :3000,
    autoplayHoverPause :true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

  getCatergories=()=>{

  this.cancelSubscription= this._CatergoriesService.getCatergories().subscribe({
      next:(res)=>{ 
        console.log( res )
        this.categories =res.data ;
       
      },error:(err)=>{
        console.log(err)
      }
   

  })
  }
slidesStore: any;

  ngOnInit(): void {
          this.getCatergories()
  }

  ngOnDestroy(): void {
    this.cancelSubscription.unsubscribe()
  }
}
