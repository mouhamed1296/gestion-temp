import { DashboardComponent } from './../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent {
  profil!: any;
  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  spin=false;
  showFormPass= false
  showForm = false; 
  user: any;
  findAll:any;
signupError: any;
  id: any;
  verifPass: any;
  FormBuilder: any;

 
 
constructor(private builder: FormBuilder, private userService: UserService , private router : Router){
  this.registerForm = this.builder.group({
    prenom: ['', [Validators.required, this.noWhitespaceValidator]],
    nom: ['', [Validators.required, this.noWhitespaceValidator]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

  });

}
//controle espacement
noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}


//recuperation donnees
ngOnInit(): void {
//Cette ligne de code tente de récupérer une valeur stockée dans 
//le stockage local avec la clé "connectedUser" et de l'analyser en tant qu'objet JSON. 
//Le résultat est alors affecté à une propriété nommée "profil".
    this.profil = JSON.parse(localStorage.getItem('connectedUser') as unknown as any);
  
   //recuperation donnees
    this.registerForm.setValue({nom: this.profil.nom, prenom: this.profil.prenom, email: this.profil.email})
    
  //service
    this.userService.getUsers().subscribe(
      data => {
        this.user = data;
        this.findAll = this.user.filter((e: any) => e.etat == true)
        //console.log(this.findAll)
      }
    );
    
  
  }

  
 onSubmit() {
  this.registerForm.setValue({
    prenom: [''],
    nom: [''],
    email: [''],
  });
}
modifUsers (){
  //recuperation id sur le profil
  const id = this.profil._id;
  
  const user = {
    nom: this.registerForm.value.nom,
   prenom: this.registerForm.value.prenom,
   email: this.registerForm.value.email
  }
  console.log(user)
  this.userService.modifUsers(id,user).subscribe(()=> {
    this.profil()

  })
 
  const Toast = Swal.mixin({
    toast: true,
    position: 'center-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
this.userService.modifUsers(id,user).subscribe(
 {

  next: (data) => {
    Toast.fire({
      icon: 'success',
      title: `${user.prenom + ' ' + user.nom} a été modifié avec succés`
    })
    console.log(data);
    setTimeout(()=>{
      this.showForm= true
      this.router.navigateByUrl('dashboard')
    }, 3000 )
  
  },
  error: (error) => {
    console.log(error);
    
  }
 }
);
}

modifpassword(){

  const id = this.registerForm.value.id;
  const user = {
    password: this.registerForm.value.password,
  
  }
  console.log(user)

  this.userService.modifUsers(id,user).subscribe(

    data => {
      this.showFormPass= true
      console.log(data)
    /*   this.router.navigateByUrl('dashboard') */
    }
  );
}


checkPassword = () => {

  let pass1 = this.registerForm.value.password
  let pass2 = this.registerForm.value.password2

  console.log(pass1 != pass2)

  if (pass1 != pass2) {
    this.verifPass = true;
    this.registerForm = this.FormBuilder.group(
      {

        password: [''],
        password2: [''],

      })

    setTimeout(() => { this.verifPass = false }, 3001);
  }
  
}
}
