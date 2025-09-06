import { Component } from '@angular/core';
import { Math } from '../../services/math';
@Component({
  selector: 'app-servdemo',
  imports: [],
  templateUrl: './servdemo.html',
  styleUrl: './servdemo.css'
})
export class Servdemo {
  // here we create the constructor without using the new keyword, with dependency injection
  // instance of the math service will be created and used on mathService
  //its simply we are creating the object of the sevivce and using it
  constructor(private mathService:Math){
  }

  ngOnInit(){
    console.log(`Add of 10&20 is ${this.mathService.add(10,20)}`)
  }
}
