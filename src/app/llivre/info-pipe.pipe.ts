import { Pipe, PipeTransform } from '@angular/core';
import {LlivreComponent} from './llivre.component';
import {TitleCasePipe} from '@angular/common';

@Pipe({
  name: 'infoPipe'
})
export class InfoPipePipe implements PipeTransform {

  /*transform(value: any, args: string): any {

    if (!value) {return null; }
    if (!args) {return value; }
    let rgxPattern = new RegExp('[a-zA-Z0-9]');
    // tslint:disable-next-line:only-arrow-functions
    return value.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
  transform(value: any, term: any) {
    if (!term) { return value; }
    return value.filter((item: any) => {
      for (let prop in item) {
          if (typeof item[prop] === 'string' &&
            item[prop].toLowerCase().indexOf(term.toLowerCase()) > -1) {
            return true;
          }
      }
      return false;
    });
  }*/
  transform(items: any, term: any): any {
    if (term === undefined) { return items; }

    // tslint:disable-next-line:only-arrow-functions
    return items.filter(function(item) {
      for (const property in item){
        if (item[property] === null){
          continue;
        }
        if (item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }
}
