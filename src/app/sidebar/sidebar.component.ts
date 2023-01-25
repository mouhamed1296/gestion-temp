import { Component } from '@angular/core';
import profils from '../profil.json';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
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
    constructor(private authService: AuthService, private userService: UserService) {
      //recupération du profile de l'utilisateur
      this.authService.profile().subscribe({
        next: (user: any) => {
          console.log(user);
          //Vérifier si l'utilisateur est un admin
          this.isAdmin = user.role === 'admin' ? true : false;

          this.userService.getConnectedUser(user.email).subscribe({
            next: (connectedUser: any) => {
              console.log(connectedUser);

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
    }
}
