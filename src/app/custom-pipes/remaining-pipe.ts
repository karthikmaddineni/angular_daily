import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
  //pure : true;  this is an pure pipe
  //pure : false;  this is an im-pure pipe
  //all custom pipes are pure pipes
})
export class RemainingPipe implements PipeTransform {

  transform(input:string){
    console.log('remaining pipe')
    //this remaining pipe will get call only we value gets updated
    //so for pure pipe gets called only when that specific component gets updated
    //in case of im-pure pipes, when any component in page is updated pipe will be called 
    return 100-input.length;
  }

}
