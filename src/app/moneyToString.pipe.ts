import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyToString'
})
export class MoneyToStringPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

}
