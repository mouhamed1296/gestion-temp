import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.css'],

})
export class TableauAdmComponent implements OnInit, AfterViewInit {
  donne: User[]= [];
  pages: number =1;
  searchText:any

  
  getId: any;
  registerForm!: FormGroup;
  submitted = false;
  tabOn = true;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) {
    this.registerForm = this.formBuilder.group({
        
        prenom: ['',],
        nom: [''],
        email: [''],
      });

      
 }

 ngAfterViewInit() {
    this.getDonnees()
 }

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
    this.userService.getUsers().subscribe((donne:any) => {
      this.donne = donne
    })
  }

 /*  SimpleAlert(){
    Swal.fire(
      'modification reussie!',
      'you cliked the button!',
      'success'
    )
  } */
  changeRole = (id: string) => {
    this.userService.changerRole(id).subscribe(()=> {
      this.getDonnees()
    })

 };

 recupereDonne(id: any,prenom: any,nom: any,email: any){

  Swal.fire({
      title: 'Voulez-vous vraiment modifier cet utilisateur?',
    
        icon: 'warning',
          confirmButtonColor: "#B82010",
            cancelButtonColor: "green" ,
             showCancelButton: true,
               confirmButtonText: 'oui!',
                  cancelButtonText: 'Annuler'
                 }).then((result) => {
                  if(result.value){


  this.registerForm = this.formBuilder.group({
  
    prenom: [prenom, Validators.required ],
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

  this.userService.delete(id).subscribe(()=>{
    this.getDonnees()
  })

}

  modifier(id: any){
    if(!this.registerForm.valid){
      return
    }
    console.log(this.registerForm.value)
    this.userService.update(id,this.registerForm.value).subscribe(()=> {
      this.getDonnees()
      
    })
  }
 }







   //if(confirm("Voulez-vous vraiment supprimer ?")) {
  //console.log(this.updateForm.value.etat);
  //if (window.confirm('Voulez-vous vraiment supprimer ?')) {
    //this.userService.Delete(id, this.updateForm.value).subscribe(
     // () => {
       // console.log('Data updated successfully!');
        //this.success = 'Archivé avec succés';
        //setInterval(() => { this.success = ''}, 3000);
        //this.getDonnees();
         //this.ngZone.run(() => this.router.navigateByUrl('active'));
     // }
    ;/* } */
 // }