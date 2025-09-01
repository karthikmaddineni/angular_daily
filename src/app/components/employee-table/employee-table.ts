import { Component, input,Output,output } from '@angular/core';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import EventEmitter from 'events';
@Component({
  selector: 'app-employee-table',
  imports: [],
  standalone:true,
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css'
})
export class EmployeeTable {
  readonly data = input<any[]>();

  readonly deleteEmployee = output<number>();
}
