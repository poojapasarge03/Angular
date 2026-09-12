import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uIpipes',
})
export class UIpipesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
