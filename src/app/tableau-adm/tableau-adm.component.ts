import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import liste from '../modele/liste.json';
import Swal from 'sweetalert2';


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
  

  getId: any;
  registerForm!: FormGroup;
  submitted = false;
  tabOn = true;

  constructor(
    public formBuilder: FormBuilder,
   
  ) {

    this.registerForm = this.formBuilder.group({
        id: [''],
        prenom: ['',],
        nom: [''],
        email: [''],
      });
 } donne:donneeliste[]= [];
   

  ngOnInit(): void {
    
     this.getDonnees()
 
     this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  
  });
  }
  get f() { return this.registerForm.controls; }
  getDonnees = () => {
    this.donne = liste
  }

 /*  SimpleAlert(){
    Swal.fire(
      'modification reussie!',
      'you cliked the button!',
      'success'
    )
  } */
  changeRole = (id: string, role: string) => {
    this.donne = this.donne.map((d) => {
      if (d.id == id) {
        d.role = role == 'administrateur' ? 'utilisateur' : 'administrateur'; /* pour switche */
      }
      return d
    })

    console.log(this.donne);
    
 }; 

 recupereDonne(id: any,prenom: any,nom: any,email: any){

  Swal.fire({         
      title: 'Voulez-vous vraiment changer le role de cet utilisateur?',   
    text: 'Si oui met ok', 
        icon: 'warning',   
          confirmButtonColor: "#B82010",  
            cancelButtonColor: "green" ,   
             showCancelButton: true,   
               confirmButtonText: 'ok!',  
                  cancelButtonText: 'Annuler'  
                 }).then((result) => {
                  if(result.value){ 
                
                 
  this.registerForm = this.formBuilder.group({
    id : [id],
    prenom: [prenom, Validators.required],
    nom: [nom, Validators.required],
    email: [email, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  });
}
})
  this.tabOn = false;

 }

 onSubmit() {
  this.registerForm.setValue({
    prenom: [''],
    nom: [''],
    email: [''],
  });
 }

 delete(id: string) {
  //if(confirm("Voulez-vous vraiment supprimer ?")) {
  //console.log(this.updateForm.value.etat);
   if (window.confirm('Voulez-vous vraiment supprimer ?')) { 
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
 }
  

             
   /* const roles = { role:role };   
     if (confirm('Changer de role')) {
              this.crudService.change_role(id, user).subscribe((data) => {
              this.ngOnInit();       });      }*/  