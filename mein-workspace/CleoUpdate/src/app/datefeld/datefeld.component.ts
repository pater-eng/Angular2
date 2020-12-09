import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  @Input() valeur:Date;
  @Input() submittedAlready: boolean;


  @Output() valeurChange = new EventEmitter<Date>();


  constructor() { }


  ngOnInit() {
  }

  update() {
    this.valeurChange.emit(this.valeur);
  }

}
