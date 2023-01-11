import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  getId: any;
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {

    this.registerForm = this.formBuilder.group({
        prenom: [''],
        nom: [''],
        email: [''],
      });
 }

ngOnInit(): void {
  
}

 onSubmit() {
  this.registerForm.setValue({
    prenom: ['prenom'],
    nom: ['nom'],
    email: ['email'],
  });
 }
 

}
