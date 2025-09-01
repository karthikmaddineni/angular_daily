import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { Carousel } from './components/carousel/carousel';
import { Categories } from './components/categories/categories';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
// import { Products } from './components/products/products';
// import { Databinding } from "./components/databinding/databinding";
// import { TempReference } from "./components/temp-reference/temp-reference";
import { CommonModule } from '@angular/common';
// import { Directives } from './components/directives/directives';
// import { Asgmt02 } from './components/asgmt02/asgmt02';
// import { Asgmt03 } from './components/asgmt03/asgmt03';
// import { Asgmt04 } from './components/asgmt04/asgmt04';
import { EmployeeAdd } from "./components/employee-add/employee-add";
import { EmployeeCRUD } from "./components/employee-crud/employee-crud";
import { EmployeeTable } from "./components/employee-table/employee-table";
import { EmployeeComponent } from './components/employee-component/employee-component';
import { Httpemployees } from './components/http-demo1/http-demo1';
import { HTTPEMPASS01 } from './components/httpempass01/httpempass01';
import { PipesDemo } from "./components/pipes-demo/pipes-demo";
import { AssignmentRegistrationForm } from "./components/assignment-registration-form/assignment-registration-form";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Navbar,
    Categories,
    // AssignmentRegistrationForm,
    // EmployeeComponent,
    // Asgmt04,
    //Asgmt03,
    // Asgmt02,
    // Carousel,
    // TempReference, 
    // Products, 
    // PipesDemo,
    // Body,
    Footer,
    AssignmentRegistrationForm
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_pro');
}
