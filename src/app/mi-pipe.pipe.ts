import { Pipe, PipeTransform } from '@angular/core';
import Cliente from './cliente';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {


  transform({edad, name}: Cliente, language: string): string {

    // PURA
    return (language==='es') ? `${name} tiene ${edad} años`: `${name} has ${edad} yo`;
  }

}
