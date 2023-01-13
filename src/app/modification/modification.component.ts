import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import modifier from '../modifie.json';

interface modification{
  NOM: string;
PRENOM: string;
 email:string;
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
  modifie:modification[]=modifier;
 showForm = false; 
  constructor(private formBuilder: FormBuilder ){
    
    
    
   
      this.registerForm = this.formBuilder.group({
        id:[''],
        PRENOM: ['', [Validators.required]],
       NOM: ['', [Validators.required]],
       email:['',[Validators.required,Validators.email]],
        
      }), 
     

 { 
  } 
} 
onSubmit(){
  this.submitted = true
  this.spin = true

























   if(this.registerForm.invalid){
    this.spin = false
    return ;
  } 

}



modifUsers (){
  
  {
    
    setTimeout(() => {
    
    }, 2000);
    return;
  }
}

}
