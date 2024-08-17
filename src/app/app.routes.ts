import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
     {path:'',component:AuthLayoutComponent,children:[
        {path:'',redirectTo:'signin' ,pathMatch:'full'},
           {path:'signup',component:SignupComponent},
           {path:'signin',component:SigninComponent},
     ],

     },
     {path:'',component:MainLayoutComponent,children:[
     
        {path:'home',component:HomeComponent},
        {path:'brands',component:BrandsComponent},
        {path:'cart',component:CartComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'navbar',component:NavbarComponent},
        {path:'orders',component:OrdersComponent},
        {path:'products',component:ProductsComponent},
   
    ] },
     {path:'**',component:NotFoundComponent},

];
