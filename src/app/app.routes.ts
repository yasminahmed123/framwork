import { Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuardGuard } from './core/guards/logged-guard.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [loggedGuardGuard],
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signup', loadComponent: () => import('./components/signup/signup.component').then(m => m.SignupComponent) },
      { path: 'signin', loadComponent: () => import('./components/signin/signin.component').then(m => m.SigninComponent) },
      { path: 'forget', loadComponent: () => import('./components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent) },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'brands', loadComponent: () => import('./components/brands/brands.component').then(m => m.BrandsComponent) },
      { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent) },
      { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent) },
      { path: 'navbar', loadComponent: () => import('./components/navbar/navbar.component').then(m => m.NavbarComponent) },
      { path: 'address/:id', loadComponent: () => import('./components/address/adress.component').then(m => m.AdressComponent) },
      { path: 'products', loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent) },
      { path: 'wishlist', loadComponent: () => import('./components/wishlist/wishlist.component').then(m => m.WishlistComponent) },
      { path: 'details/:id', loadComponent: () => import('./components/product-details/product-details.component').then(m => m.ProductDetailsComponent) },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
