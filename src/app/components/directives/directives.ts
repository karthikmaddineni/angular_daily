import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css']   
})
export class Directives {
  
  toggleButton = true;

  employees = [
    { id: 1, name: 'John',  role: 'Manager',   salary: 85000, status: 'Active'   },
    { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active'   },
    { id: 3, name: 'Bob',   role: 'Tester',    salary: 30000, status: 'Inactive' },
    { id: 4, name: 'Eve',   role: 'HR',        salary: 40000, status: 'Active'   }
  ];

  roleColors: Record<string, string> = {
    Manager:   'lightyellow',
    Developer: 'lightblue',
    Tester:    'lightpink'
  };


  salaryBadgeClass(salary: number) {
    if (salary > 70000) return ['bg-success'];                  // green
    if (salary >= 40000) return ['bg-warning', 'text-dark'];    // orange with dark text for contrast
    return ['bg-danger'];                                       // red
  }
}
