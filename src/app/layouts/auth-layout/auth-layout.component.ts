import { Component } from '@angular/core';
import { AuthNavbarComponent } from '../../components/auth-navbar/auth-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthNavbarComponent,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
