import { Component } from '@angular/core';
import profils from '../profil.json';
import { DONNE } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  profil:DONNE[]=profils;

  /* logOut(){
    this.userService.getLogOut();
    // this.ngOnInit()
    this.router.navigateByUrl('login')
    
    }
     */
}
