import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
  standalone:true
})
export class RomanPipe implements PipeTransform {

  transform(value: number | string | null | undefined): string{
    if(value==null || value ===''){
      return '';
    }
    const n = Math.floor(Number(value));
    if(!Number.isFinite(n) || n <= 0 || n>=4000){
      return '';
    }
    const map:Array<[number,string]>=[
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let num = n;
    let out = '';
    for(const[val,sym] of map){
      while(num>=val){
        out+=sym;
        num-=val;
      }
      if(num===0) break;
    }
    return out;
  }

}
