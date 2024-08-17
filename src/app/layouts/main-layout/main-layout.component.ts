import { Component } from '@angular/core';
import { AuthNavbarComponent } from '../../components/auth-navbar/auth-navbar.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AuthNavbarComponent, NavbarComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
