import { Component } from '@angular/core';
import profils from '../profil.json';
import { DONNE } from '../dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  profil:DONNE[]=profils;
  constructor(private authService:AuthService) {}

  //Déconnexion
  logout(): void {
    this.authService.logout()
  }
}
