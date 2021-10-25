import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataFoundPipe implements PipeTransform {

  transform(value: string | number, defaultValue: string = '-'): string | number {
    return value || typeof value === 'number'  ? value : defaultValue;
  }

}
