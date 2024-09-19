import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true,
})
export class JoinPipe implements PipeTransform {
  transform(value: [], propertyName: string, separator = '\n'): unknown {
    return value.map((item) => item[propertyName]).join(separator);
  }
}
