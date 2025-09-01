import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';

@Component({
  selector: 'app-employee-crud',
  standalone:true,
  imports: [EmployeeTable],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCRUD {
    employees = [
    { id: 1, name: 'John',  role: 'Manager',   salary: 85000, status: 'Active'   },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active'   },
    { id: 3, name: 'Bob',   role: 'Tester',    salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve',   role: 'HR',        salary: 40000, status: 'Active'   }
  ];

  onAdd(emp: {name:string; role:string; salary:number; status:'Active'|'Inactive'}) {
    const nextId = (Math.max(...this.employees.map(e => e.id)) || 0) + 1;
    this.employees = [...this.employees, { id: nextId, ...emp }];
  }
  onDelete(id : number){
    this.employees = this.employees.filter(emp=>emp.id!==id);
  }

}
