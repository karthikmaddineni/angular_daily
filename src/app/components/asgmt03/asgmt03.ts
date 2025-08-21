import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-asgmt03',
  imports: [CommonModule,FormsModule],
  templateUrl: './asgmt03.html',
  styleUrl: './asgmt03.css'
})
export class Asgmt03 {
  employees = [
    { id: 1, name: 'John',  role: 'Manager',   salary: 85000, status: 'Active'   },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active'   },
    { id: 3, name: 'Bob',   role: 'Tester',    salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve',   role: 'HR',        salary: 40000, status: 'Active'   }
  ];
  AddNew :boolean= false;
  deleteEmp(id:number){
    const askUser = confirm("Are you sure");
    if(askUser){
      this.employees = this.employees.filter(emp=>emp.id!==id);
    }
  }
  newEmployee = {id:0, name: '', role: '', salary: 0, status : 'Active'}
  addEmployee(form : NgForm){
    this.employees.push({
      id : this.newEmployee.id,
      name : this.newEmployee.name,
      role : this.newEmployee.role,
      salary : this.newEmployee.salary,
      status : this.newEmployee.status
    })
  }
}
