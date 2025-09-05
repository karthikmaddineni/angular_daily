import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort'
})
export class MysortPipe implements PipeTransform {

  transform(arrr:Array<number>): Array<number> {
    return arrr.sort((a:number,b:number)=>a-b);
  }

}
