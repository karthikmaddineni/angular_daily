import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value:string | Date | number | null | undefined): string{
    if(value == null || value === '') return '';
    const dob = this.parseDate(value);
    if(!dob || isNaN(dob.getTime())) return '';

    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    const m = now.getMonth() - dob.getMonth();
    if(m<0||(m===0 && now.getDate() < dob.getDate())) years--;

    if(years < 0) years =0;
    return `${years} year${years === 1?'':'s'}old`;
  }
  private parseDate(value:string|Date|number):Date|null{
    if (value instanceof Date) return value;
    if (typeof value === 'number') return new Date(value);
    const s = value.trim();
    const native = new Date(s);
    if (!isNaN(native.getTime())) return native;

    const m = s.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      const y = parseInt(m[3], 10);
      const month = a > 12 ? b : a;
      const day   = a > 12 ? a : (b > 12 ? b : b);
      return new Date(y, month - 1, day);
    }
    return null;
  }

}
