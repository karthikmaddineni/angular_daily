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
import { Directives } from './components/directives/directives';
import { Asgmt02 } from './components/asgmt02/asgmt02';
import { Asgmt03 } from './components/asgmt03/asgmt03';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Navbar, 
    Categories,
    Asgmt03,
    // Asgmt02,
    // Carousel,
    // TempReference, 
    // Products, 
    Body, 
    Footer, 
    //Directives
    // Databinding,
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_pro');
}
