import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(overview:string,limit:number):string {
    return overview.split(' ').slice(0,limit).join(' '); 
  }

}
