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
  findAll:any;
  constructor(private formBuilder: FormBuilder, private userService: UserService){
      this.registerForm = this.formBuilder.group({
        id:[''],
        prenom: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        email:['',[Validators.required,Validators.email]],
        
      })
    
 
} 
onSubmit(){
 
 
}
ngOnInit(): void {

  this.userService.getUsers().subscribe(
    data => {

      this.user = data;

      this.findAll = this.user.filter((e: any) => e.etat == true)
      console.log(this.findAll)
    }
  );

}
getUsers(id:any,email:any,prenom:any,nom:any){
  this.showForm = true;
        this.registerForm = this.formBuilder.group({
            id:[id],
            prenom: [prenom, [Validators.required]],
            nom: [nom, [Validators.required]],
            email: [email, [Validators.required,Validators.email]],
          });
      
    
  
    for (const iterator of this.findAll) {
      id = iterator._id
    }
}
  modifUsers (){
    const id =  this.registerForm.value.id;
    for (const iterator of this.user) {
      this.submitted = true
      this.spin = true
     if(this.registerForm.invalid){
      this.spin = false
      return ;
    }
  }
  
   const user ={
    nom : this.registerForm.value.nom,
    prenom: this.registerForm.value.prenom,
    email: this.registerForm.value.email
   }
   
   this.userService.modifUsers(id,user).subscribe(
  
     data=>{
  
      this.ngOnInit();
      this.showForm = false
    },
    error =>{
      console.log(error )
    }
   );
  }
}





