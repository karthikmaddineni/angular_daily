import { Injectable } from '@angular/core';
//here we use the @Injectable annotation, this make this 
// service injectable to all the components
@Injectable({
  providedIn: 'root'
})
export class Math {

  add(a:any,b:any){
    return a+b;
  }
  
  sub(a:any,b:any){
    return a-b;
  }

  multi(a:any,b:any){
    return a*b;
  }
}