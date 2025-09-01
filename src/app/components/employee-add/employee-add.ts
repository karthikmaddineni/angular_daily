import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css'
})
export class EmployeeAdd {
  @Output() add = new EventEmitter<{name:string;role:string;salary:number;status:'Active'|'Inactive'}>();

  model = {name:'',role:'',salary:0,status:'Active'as'Active'|'Inactive'};
  submit(){
    if(!this.model || !this.model.role)return;
    this.add.emit({...this.model,salary:Number(this.model.salary)});
    this.model={name:'',role:'',salary:0,status:'Active'};
  }
}
