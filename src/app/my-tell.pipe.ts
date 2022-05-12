import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTell'
})
export class MyTellPipe implements PipeTransform {

  transform(s1:number,s2:string):string {
    if(s1>30000)
    {
      s2=s2+" Expensive"
    }
    else{
      s2+=" Cheap"
    }
    return s2;
  }

}
