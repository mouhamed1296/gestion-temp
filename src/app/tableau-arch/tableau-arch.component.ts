import { Component, OnInit,NgZone} from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import liste from '../modele/liste.json';


interface donneeliste{

  prenom:string;
  nom:string;
  email:string;
  matricule:string;
  role:string;
  id:string;
  
}
@Component({
  selector: 'app-tableau-arch',
  templateUrl: './tableau-arch.component.html',
  styleUrls: ['./tableau-arch.component.css']
})
export class TableauArchComponent implements OnInit{
  pages: number = 1;
  searchText:any
  getId: any;

  updateForm!: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
   
    
    ) {
      this.updateForm = this.formBuilder.group({
        etat: [true]
      });
    } donne:donneeliste[]= [];

  ngOnInit(): void {
    
    this.getDonnees()
  }

  getDonnees = () => {
    this.donne = liste 
}
restaurer( id: String) {

  
  console.log(id); 
}
}