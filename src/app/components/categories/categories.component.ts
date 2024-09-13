import { Component, OnInit } from '@angular/core';
import { Category } from '../../core/interfaces/product';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../core/services/products.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HttpClientModule,RouterLink], 
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryData: Category[] = [];

  constructor(private _ProductService: ProductsService) {}

  ngOnInit(): void {
    this._ProductService.getCategory().subscribe({
      next: (res: { data: Category[] }) => {
        console.log(res);
        this.categoryData = res.data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
