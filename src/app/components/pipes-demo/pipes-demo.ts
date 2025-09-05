import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { MysortPipe } from '../../custom-pipes/mysort-pipe';
@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe, MysortPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
//every custom pipe is an pure pipe
export class PipesDemo {
  myName = "KArthik MaddIneni";
  mySalary = 12.11;
  today = new Date();
  arr = [10,20,30,40,50,60];
  user={name:'Karthik',age:'24'};
  num = interval(2000);
  msg : string = '';
  arrr=[20,40,10,4,40,30,90,12];
}
