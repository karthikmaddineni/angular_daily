import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '../../title-case-pipe';
@Component({
  selector: 'app-body',
  imports: [TitleCasePipe,FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  userName : string = '';
  titleName : string = '';

}
