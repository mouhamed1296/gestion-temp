import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import modifier from '../modifie.json';
import { UserService } from '../services/user.service';

interface modification{
  
}

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent {

  registerForm!:FormGroup;
  title = 'angularvalidate';
  submitted = false;
  spin=false;
 showForm = false; 
  user: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService){
      this.registerForm = this.formBuilder.group({
        id:[''],
        prenom: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        email:['',[Validators.required,Validators.email]],
        
      })
    
 
} 
onSubmit(){
  this.submitted = true
  this.spin = true
   if(this.registerForm.invalid){
    this.spin = false
    return ;
  }
  const id = this.registerForm.value.id;
  for (const iterator of this.user) {
    console.log(iterator.email  )
    if(iterator.email == this.registerForm.value.email && iterator._id != id){
      
      setTimeout(() => {
       
      }, 2000);
      return;
    }
  }

  const user= {
    prenom: this.registerForm.value.prenom,
    nom: this.registerForm.value.nom,
    email: this.registerForm.value.email
  }

this.userService.modifUsers(id, user).subscribe(
  data=>{
    
  }
);

}

}






