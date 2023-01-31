import { Component, OnInit } from '@angular/core';
import profils from '../profil.json';
import { DONNE } from '../dashboard/dashboard.component';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user: any;
getUserPassword(arg0: any) {
throw new Error('Method not implemented.');
}
  profil!: any;
  logoutIcon = faPersonWalkingArrowRight
  registerForm!:FormGroup;
  showForm = false;

  constructor(private authService:AuthService,
    private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('connectedUser'));

    this.profil = JSON.parse(localStorage.getItem('connectedUser') as unknown as any);
  }

  getUsers(id:any,email:any,prenom:any,nom:any){
    this.showForm = true;
          this.registerForm = this.formBuilder.group({
              id:[id],
              prenom: [prenom, [Validators.required]],
              nom: [nom, [Validators.required]],
              email: [email, [Validators.required,Validators.email]],
            });

  }

  //Déconnexion
  logout(): void {
    this.authService.logout()
  }
}
