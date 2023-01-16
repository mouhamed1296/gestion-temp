import { Component, OnInit } from '@angular/core';

import dashboard from '../histo.json';
import tableau from '../tableauhis.json';
import profils from '../profil.json';



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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   {




imageSrc = 'assets/fan.png';
messageText = '';
index= 'assets/off.png'

imageButtons = [ {src: 'assets/fan.png', name: 'OFF', onsrc:'assets/on.png'},
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
