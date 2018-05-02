import {Component, Input, OnInit} from '@angular/core';
import {KvzVersicherung} from '../Services/kvz-versicherung-service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textblock',
  templateUrl: './textblock.component.html',
  styleUrls: ['./textblock.component.css']
})
export class TextblockComponent implements OnInit {

 /* kvzVersicherung = new KvzVersicherung();*/
  @Input() kvzVersicherung: KvzVersicherung;
  @Input() labelText:string;
  @Input() isRequired:boolean;

  @Input() textblockControl: FormControl;
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
