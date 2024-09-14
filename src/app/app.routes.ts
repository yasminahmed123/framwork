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
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuardGuard } from './core/guards/logged-guard.guard';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdressComponent } from './components/address/adress.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


export const routes: Routes = [
     {path:'',component:AuthLayoutComponent,canActivate:[loggedGuardGuard],children:[
        {path:'',redirectTo:'signin' ,pathMatch:'full'},
           {path:'signup',component:SignupComponent},
           {path:'signin',component:SigninComponent},
           {path:'forget',component:ForgetPasswordComponent},

     ],

     },
     {path:'',component:MainLayoutComponent,canActivate:[authGuard],children:[
     
        {path:'home',component:HomeComponent, },
        {path:'brands',component:BrandsComponent},
        {path:'cart',component:CartComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'navbar',component:NavbarComponent},
        {path:'address/:id',component:AdressComponent},
        {path:'products',component:ProductsComponent},
        {path:'wishlist',component:WishlistComponent},
        {path:'details/:id',component:ProductDetailsComponent,title :'details'},
   
    ] },
     {path:'**',component:NotFoundComponent},

];
