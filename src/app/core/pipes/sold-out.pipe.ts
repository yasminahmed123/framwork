import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldOut',
  standalone: true
})
export class SoldOutPipe implements PipeTransform {

  transform(qty: number): string |null {

    if(qty  >100){ return null;}
    else{
      return 'soldOut'
    }
   

  }

}
