import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/* import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/User'; */

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {

 
  constructor(private builder: FormBuilder){
    this.profileForm.valueChanges.subscribe((data) => {
      console.log(data);
      console.log(this.profileForm.controls.firstName.errors);
      
    })
  }

  profileForm = this.builder.group({
    firstName: ['', [Validators.required, this.noWhitespaceValidator]],
    lastName: ['', [Validators.required, this.noWhitespaceValidator]],
    Email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Role: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Confirm: new FormControl('', Validators.required),
  }, {
    validators: [this.MustMatch('Password', 'Confirm'), this.handleRole('Role')],
  });

  handleRole(controlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]
      if (control.errors && !control.errors.hasRole) {
        return;
      }
      if (control.value != 'admin' && control.value != 'utilisateur') {
        control.setErrors({ hasRole: true })
      } else {
        control.setErrors(null)
      }
    }
  }
    //ici j'exporte la class MushMatch pour la gestion de mes mots de passes
 MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          //renvoie si un autre validateur a déjà trouvé une erreur sur le matchingControl
          return;
      }

      //définir une erreur sur matchingControl si la validation échoue
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
 noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

  }
  
  
  
 
    

    

  

    



 
  

