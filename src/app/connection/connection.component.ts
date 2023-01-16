import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface inscipt{
  email:string;
  password:string;
}


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  constructor(private builder: FormBuilder){
    this.profileForm.valueChanges.subscribe((data) => {
      console.log(data);
      console.log(this.profileForm.controls.Email.errors);
      
    })
  }

  profileForm = this.builder.group({
    Email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Password: new FormControl('', Validators.required),
  });
 
}
