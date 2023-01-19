import { Component } from '@angular/core';
import profils from '../profil.json';
import { AuthService } from '../services/auth.service';
interface DONNE{
  NOM: string;
PRENOM: string;

}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    isAdmin: boolean = false;
    constructor(private authService: AuthService) {
      //recupération du profile de l'utilisateur
      this.authService.profile().subscribe({
        next: (user: any) => {
          //Vérifier si l'utilisateur est un admin
          this.isAdmin = user.role === 'admin' ? true : false;
        },
        error: (err)=> {
          console.log(err);
        },
        complete: () => {
          console.log("complete");
        }
      })
    }
}
