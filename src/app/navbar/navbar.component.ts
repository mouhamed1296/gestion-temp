import { Component, OnInit } from '@angular/core';
import profils from '../profil.json';
import { DONNE } from '../dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profil!: any;
  logoutIcon = faPersonWalkingArrowRight
  dropdown: boolean = false

  constructor(private authService:AuthService, private userService: UserService, private router:Router) {}

  ngOnInit(): void {

     //recupération du profile de l'utilisateur
     this.authService.profile().subscribe({
      next: (user: any) => {
        this.userService.getConnectedUser(user.email).subscribe({
          next: (connectedUser: any) => {
            this.profil = connectedUser
            localStorage.setItem('connectedUser', JSON.stringify(connectedUser));
          },
          error: (err)=> {
            console.log(err);
          },
          complete: () => {
            console.log("complete");
          }
        })
      },
      error: (err)=> {
        console.log(err);
      },
      complete: () => {
        console.log("complete");
      }
    })
    //this.profil = JSON.parse(localStorage.getItem('connectedUser') as unknown as any);
  }

  showDropdown() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard']);
  });
    this.dropdown = true
  }

  //Déconnexion
  logout(): void {
    this.authService.logout()
  }
}
