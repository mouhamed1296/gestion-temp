import { Component } from '@angular/core';


import dashboard from '../histo.json';
import tableau from '../tableauhis.json';
import profils from '../profil.json';
import { Router } from '@angular/router';



interface historique{
  Heure: string;
 temperature: string;
 humidite: string;
 img:string;
}
interface tab{
  humidite: string;
 temperature: string;

}
export interface DONNE{
  NOM: string;
PRENOM: string;

}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  pageUrl: string = ''
  constructor(private router:Router){
    this.router.events.subscribe((event: any) => {
      this.pageUrl = this.router.routerState.snapshot.url;
    })
  }

imageSrc = 'assets/fan.png';
messageText = '';
imageButtons = [ {src: 'assets/fan.png', name: 'OFF'},
{src: 'assets/fan2.gif', name: 'ON'}]

histo:historique[]=dashboard;
tableauhis:tab[]=tableau;
profil:DONNE[]=profils;
ngOnInit():void{

}
onClick(imageNameObject: { src: string; name: string; }) {
  this.imageSrc = imageNameObject.src;
  this.messageText = imageNameObject.name;
}
}
