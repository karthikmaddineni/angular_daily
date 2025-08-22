import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || Number.isNaN(Number(value))) return '';
    const v = Number(value) % 100;
    const suffixes = ['th', 'st', 'nd', 'rd'];
    return `${value}${suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]}`;
  }
}
