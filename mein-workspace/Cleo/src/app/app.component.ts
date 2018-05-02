import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KvzVersicherung} from './Services/kvz-versicherung-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public kvzVersicherung : KvzVersicherung;

  routes = [
  {text: 'Kfz(PKW)', url: '/kvz-versicherung'},
  ]


}
