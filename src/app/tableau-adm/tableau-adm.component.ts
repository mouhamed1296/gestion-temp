import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';



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
  styleUrls: ['./tableau-adm.component.css'],

})
export class TableauAdmComponent implements OnInit {

  signupError: string | null = null;
  donne: User[]= [];
  pages: number =1;
  searchText:any;
  id: string = ''


  getId: any;
  registerForm!: FormGroup;
  submitted = false;
  tabOn = true;
  formBuilder: any;

  constructor(private builder: FormBuilder, private userService: UserService){
  this.registerForm = this.builder.group({
    prenom: ['', [Validators.required, this.noWhitespaceValidator]],
    nom: ['', [Validators.required, this.noWhitespaceValidator]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

  });
  /* this.registerForm.valueChanges.subscribe(()=> {
    console.log(this.registerForm.value);

  }) */

}

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

 ngAfterViewInit() {
    this.getDonnees()
 }

  ngOnInit(): void {
     this.getDonnees()
/*
     this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

  }); */
  }
  //get f() { return this.registerForm.controls; }
  getDonnees = () => {


    this.userService.getUsers().subscribe((donne:any) => {
      this.donne = donne
    })



  }
/*
  SimpleAlert(){
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
    cancelButtonText: 'Annuler',

               }).then((result) => {
                if(result.isConfirmed){
                  console.log(result);

this.tabOn = false;





                }

              })
              this.id = id
              this.registerForm.setValue({prenom, nom, email})

 /*  this.registerForm = this.builder.group({

    id: [id],
    prenom: [prenom],
    nom: [nom],
    email: [email],
  }); */





 }



 onSubmit() {
  this.registerForm.setValue({
    prenom: [''],
    nom: [''],
    email: [''],
  });


 }

 delete(id: string) {

  Swal.fire({
    title: 'Voulez-vous vraiment archiver cet utilisateur?',

      icon: 'warning',
        confirmButtonColor: "#B82010",
          cancelButtonColor: "green" ,
           showCancelButton: true,
             confirmButtonText: 'oui!',
                cancelButtonText: 'Annuler'
               }).then((result) => {

        if(result.isConfirmed){

  this.userService.delete(id).subscribe(()=>{
    this.getDonnees()
  })
}
})

}

  modifier(){
    if(!this.registerForm.valid){
      return
    }
    const id = this.id
    console.log(this.registerForm.value)
    this.userService.update(id,this.registerForm.value).subscribe(()=> {
      this.getDonnees()

    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    this.userService.update(id,this.registerForm.value).subscribe({
      next: (user) => {

        Toast.fire({
          icon: 'success',
          title: ` modifié avec succés`
        })
      },
      error: (err) => {
        this.signupError = err.error.message
        setTimeout(() => {
          this.signupError = null;
        }, 5000)
      },
      complete: () => console.log("complete")
    })

  }

 }


