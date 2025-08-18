import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { Categories } from './components/categories/categories';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Products } from './components/products/products';
import { Databinding } from "./components/databinding/databinding";
@Component({
  selector: 'app-root',
  imports: [Navbar,Categories, Carousel, Products, Body, Footer, Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_pro');
}
