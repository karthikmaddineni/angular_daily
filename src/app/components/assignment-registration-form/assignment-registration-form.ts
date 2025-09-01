import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-registration-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './assignment-registration-form.html',
  styleUrl: './assignment-registration-form.css'
})
export class AssignmentRegistrationForm {
  user = {
    "firstName": "Karthik",
    "lastName": "Maddineni",
    "email": "Karthik@gmail.com",
    "address": {
      "city": "Dayton",
      "state": "OH",
      "pincode": "45419",
      "country":"USA"

    },
    "gender":"",
    "skills":{
      "html":false,
      "css":false,
      "Angular":false,
    },
    "bio":'',
    "Terms and Check-box":false
    
  };

  lastSubmit:any=null;
  submitMyForm(formDate: any) {
    console.log(formDate)
    this.lastSubmit=JSON.parse(JSON.stringify(formDate.value))
    console.log("SUBMITED");

    formDate.resetForm({
      "firstName": "Jhon",
    "lastName": "Doe",
    "email": "JhonDoe@gmail.com",
    "address": {
      "city": "ABC",
      "state": "AB",
      "pincode": "12345",
      "country":"A"

    },
    "gender":"",
    "skills":{
      "html":false,
      "css":false,
      "Angular":false,
    },
    "bio":'',
    "Terms and Check-box":false
    });
  }
}