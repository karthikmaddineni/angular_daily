import { Pipe, PipeTransform } from '@angular/core';
//here it imports a pipe:a decorator that marks class as pipe
//pipeTransform, it like and interface where we implemnt this to enforce the tranform()
@Pipe({//this one is the decorator it defines this class as pipe
  name: 'titleCase'//this pipe will be registerd as the name titleCase
})//we use {{someValue | titleCase}},. angular will know that to call this pipe 
export class TitleCasePipe implements PipeTransform {
  //pipe class will have one method called transform()
  transform(value: string): string {//here it takes the input value as string and returns the string value
    if(!value) return '';//if not value returns nothing
    return value.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    //here main code will happens
  }
}
