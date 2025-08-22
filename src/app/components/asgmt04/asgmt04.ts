import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from '../../ordinal-pipe';
import { RomanPipe } from '../../roman-pipe';
import { AgePipe } from '../../age-pipe';
@Component({
  selector: 'app-asgmt04',
  standalone: true,
  imports: [OrdinalPipe,RomanPipe,AgePipe],         
  templateUrl: './asgmt04.html',
  styleUrls: ['./asgmt04.css']
})
export class Asgmt04 {

}

