import {Component, forwardRef, Input, OnInit, Output} from '@angular/core';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ComboboxComponent} from '../combobox/combobox.component';

@Component({
  selector: 'app-textfeld',
  templateUrl: './textfeld.component.html',
  styleUrls: ['./textfeld.component.css'],

})
export class TextfeldComponent  {


  @Input() labelText: string;
  @Input() isFragezeichen: boolean;
  @Input() unit:string = " ";
  @Input() isRequired:boolean;
  @Input() nameForm:string;
  @Input() fahrzeugKind:boolean;
  @Input() normal:boolean;
  @Input() fahrzeugHausnummer:boolean;
  @Input() fahrzeugWohnort:boolean;
  @Input() fahrzeugPLZ:boolean;




  @Input() textControl: FormControl;



   // Rekursion um die Eltern Info zu übergeben
  isParentTouched(localparent: FormGroup | FormArray){
    if(localparent.parent != null){
      return this.isParentTouched(localparent.parent);
    }
    return localparent.touched;
  }
}







