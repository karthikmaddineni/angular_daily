import { Component } from '@angular/core';

@Component({
  selector: 'app-httpempass01',
  imports: [],
  templateUrl: './httpempass01.html',
  styleUrl: './httpempass01.css'
})
export class HTTPEMPASS01 {
  //the below is the url for the jsonserver;
  private emp_http_url='http://localhost:3000/employees';
  //here we are creating an property(int,bool) which is any array of named Employee
  //employess : Employee[]=[];
}
