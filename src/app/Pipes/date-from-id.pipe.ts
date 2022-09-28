import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromId'
})
export class DateFromIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
