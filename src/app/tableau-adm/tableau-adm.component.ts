import { Component, OnInit } from '@angular/core';
import liste from '../modele/liste.json';


interface donneeliste {
  prenom:string;
  nom:string;
  email:string;
  role:string;
  matricule:string;
  id:string;
  

}
@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.css']
})
export class TableauAdmComponent implements OnInit {
 
  pages: number = 1;
  searchText:any
  constructor() {}
    donne:donneeliste[]= [];

  ngOnInit(): void {
    
     this.getDonnees()

  }

  getDonnees = () => {
    this.donne = liste
  }

  changeRole = (id: string, role: string) => {
    this.donne = this.donne.map((d) => {
      if (d.id == id) {
        d.role = role == 'administrateur' ? 'utilisateur' : 'administrateur'; /* pour switche */
      }
      return d
    })

    console.log(this.donne);
    
 }; 

 delete(id: string) {
  if(confirm("Voulez-vous vraiment supprimer ?")) {
  //console.log(this.updateForm.value.etat);
  /* if (window.confirm('Voulez-vous vraiment supprimer ?')) { */
    //this.crudService.updateUtilisateur(id, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        //this.success = 'Archivé avec succés';
        //setInterval(() => { this.success = ''}, 3000);
        this.getDonnees();
         //this.ngZone.run(() => this.router.navigateByUrl('active'));
      }
    ;/* } */
  }}

  editUser(){
    
  }
}
             
   /* const roles = { role:role };   
     if (confirm('Changer de role')) {
              this.crudService.change_role(id, user).subscribe((data) => {
              this.ngOnInit();       });      }*/  