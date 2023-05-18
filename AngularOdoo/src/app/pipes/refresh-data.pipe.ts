import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refreshData'
})
export class RefreshDataPipe implements PipeTransform {

  transform(values: any[]): any[] {
      return values;
    }

  }
