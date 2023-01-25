import { Component, OnInit } from '@angular/core';

import dashboard from '../histo.json';
import tableau from '../tableauhis.json';
import profils from '../profil.json';
import { SocketService } from '../services/socket.service';



interface historique {
  Heure: string;
  temperature: string;
  humidite: string;
  img: string;
}
interface tab {
  humidite: string;
  temperature: string;

}
export interface DONNE {
  NOM: string;
  PRENOM: string;
  matricule: string,

}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  histo: historique[] = dashboard;
  tableauhis: tab[] = tableau;
  profil: DONNE[] = profils;

  constructor(private socketService:SocketService){}

  ngOnInit(): void {
    this.socketService.onSocketConnected().subscribe((data) => {
      console.log(data);
    })
  }


  imageSrc = 'assets/fan.png';
  messageText = '';
  offsrc = 'assets/off.png'
  onsrc = 'assets/on.png'

  imageButtonOff = [{ src: 'assets/fan.png', name: 'OFF', srcs:'assets/on.png',srcr : 'assets/off.png' }]
  imageButtonOn = [ { src: 'assets/fan2.gif', name: 'ON', srcr : 'assets/off.png',srcs : 'assets/on.png'}]


  onClick(imageNameObject: { src: string; name: string; srcs: string; srcr: string; }) {
    this.imageSrc = imageNameObject.src;
    this.onsrc = imageNameObject.srcs;
    this.offsrc = imageNameObject.srcr;
    this.messageText = imageNameObject.name;


  }

}
