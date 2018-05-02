import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-datefeld',
  templateUrl: './datefeld.component.html',
  styleUrls: ['./datefeld.component.css']
})
export class DatefeldComponent implements OnInit {
  @Input()labelText:string;
  @Input() isRequired:boolean;
  @Input() isFragezeichen:boolean;

  @Input() datefeldControl: FormControl;


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
