import { Component, OnInit } from '@angular/core';
import profils from '../profil.json';
import { DONNE } from '../dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profil!: any;

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('connectedUser'));

    this.profil = JSON.parse(localStorage.getItem('connectedUser') as unknown as any);
  }

  //Déconnexion
  logout(): void {
    this.authService.logout()
  }
}
