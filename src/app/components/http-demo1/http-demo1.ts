import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Employee } from '../../services/EmployeeService/employee';
@Component({
  selector: 'app-httpemployee',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class Httpemployees {
  employee_api_url = 'http://localhost:3000/employees';
  isLoading: boolean = false;
  employeeArr: Employee[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.fetchEmployees();
  }
  // to push the new employee to the
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    sal: 0,
  };
  // editEmployee: Employees | null = this.employee;
  editEmployee!: Employee;

  fetchEmployees() {
    this.isLoading = true;
    this.httpClient
      .get<Employee[]>(this.employee_api_url)
      .subscribe((response: Employee[]) => {
        this.isLoading = false;
        this.employeeArr = response;
      });
  }

  onDelete(id: number) {
    this.httpClient.delete(`${this.employee_api_url}/${id}`).subscribe(() => {
      console.log('employee deleted');
      this.fetchEmployees();
    });
  }

  addEmployee() {
    if (!this.employee.id) {
      this.httpClient
        .post(this.employee_api_url, this.employee)
        .subscribe(() => {
          console.log('employee added');
          this.fetchEmployees();
        });
    }
  }

  onEdit(emp: Employee) {
    this.editEmployee = { ...emp };
    this.employee = this.editEmployee;
    console.log(this.editEmployee);
  }

  onUpdate() {
    this.httpClient
      .patch(
        `${this.employee_api_url}/${this.editEmployee.id}`,
        this.editEmployee
      )
      .subscribe(() => {
        console.log('employee updated');
        this.fetchEmployees();

        //to make the form empty again
        // this.editEmployee = null;
        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          sal: 0,
        };
      });
  }
}