import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSomeWord'
})
export class RemoveSomeWordPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLowerCase().indexOf("skype") !== -1) {
      return value.split(/skype/gi).join("");
    } else {
      return value;
    }
  }
}
