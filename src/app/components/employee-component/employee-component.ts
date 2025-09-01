import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeSrv } from '../../services/employee-srv';

@Component({
  selector: 'app-employee-component',
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css'
})
export class EmployeeComponent {
  employees : any[]= [];
  empType : string = '';
  constructor (private empSrv : EmployeeSrv){
  }
  //private empSrv = inject(EmployeeSrv);
    getEmp(value : string){
    if(value == 'male'){
      this.employees=this.empSrv.getMaleemp();
    }else if(value == 'female'){
      this.employees=this.empSrv.getFemaleemp();
    }else{
      this.employees=this.empSrv.getAllemp();
    }
  }
}
