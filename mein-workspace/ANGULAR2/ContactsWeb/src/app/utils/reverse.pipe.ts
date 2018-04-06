import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'reverse'
})

export class ReversePipe implements PipeTransform{
  transform(value: any): any {
    // hier prüft man ob Value definiert ist
    if(!!value){
      let  isArray: boolean=value instanceof Array;
      let  isString: boolean= typeof value === 'string';
      let  isNumber: boolean= typeof value === 'number';

      if(isArray){
        // die reverse Methode renverse la value ki se trouve dans la liste
        return(<Array<any>>value).reverse();
      }
      if(isNumber || isString){
        // la nouvelle valeur sera gesplittet und renverser ensuite de nouveau rassemblée et retournée
        let newVal:any =(value + '').split('').reverse().join('');
        if(isNumber) {
          // si c'est un nombre
          return parseFloat(newVal);
        }
        // si c'est pa un nombre
        return newVal;
      }
    }
    // peut importe la valeur ki est donné sera retournée
    return value;
  }

}
