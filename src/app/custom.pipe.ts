import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { privateDecrypt, privateEncrypt } from 'crypto';

@Pipe({
  name: 'custom',
  // // to make custom pipe as impure we have to add pure property as false
  pure: false
})
export class CustomPipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');

  transform(value: any, ...args: any[]): any {
     
    // // for mobile number custom pipe logic

    // if(value === '' || value == null || value == undefined) {
    //   return 'NA';
    // } else {
    //   return value ? '+91 ' + value : value;
    // }

  //  return this.datePipe.transform(value, 'MM/YYYY');
  // return this.datePipe.transform(value, 'MMM/YYYY');
  // return this.datePipe.transform(value, 'dd-MM-YYYY');
  return this.datePipe.transform(value, 'dd-MMM-YYYY');

  }

}
