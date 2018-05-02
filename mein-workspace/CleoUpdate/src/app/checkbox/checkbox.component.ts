import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() labelText:string;
  @Input() isFragezeichen:boolean;
  @Input() isRequired:boolean;

  @Input() checkboxControl: FormControl;
  constructor() { }

  isParentTouched(localparent: FormGroup | FormArray){
    if(localparent.parent != null){
      return this.isParentTouched(localparent.parent);
    }
    return localparent.touched;
  }

  ngOnInit() {
  }

}
