import {Component, Input, OnInit, forwardRef, Output, EventEmitter} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],

})
export class ComboboxComponent {

  @Input() labelText:string;
  @Input() isRequired:boolean;
  @Input() listValues: any;
  @Input() isFragezeichen: boolean;

  // damit werden Eltern die Steuerdaten bekommen kann
  @Output() fahrzeughalterKind = new EventEmitter();


  selectedValue:string ='';

  @Input() comboboxControl: FormControl;

  constructor(){

  }


  isParentTouched(localparent: FormGroup | FormArray){
    if(localparent.parent != null){
      return this.isParentTouched(localparent.parent);
    }
    return localparent.touched;
  }


}
