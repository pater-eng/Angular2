import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KvzVersicherungComponent } from './kvz-versicherung/kvz-versicherung.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {KvzVersicherungService} from './Services/kvz-versicherung-service';
import { BestehenderVertragComponent } from './bestehender-vertrag/bestehender-vertrag.component';
import { TextfeldComponent } from './textfeld/textfeld.component';
import { FahrzeugangabenComponent } from './fahrzeugangaben/fahrzeugangaben.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { DatefeldComponent } from './datefeld/datefeld.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { TextblockComponent } from './textblock/textblock.component';
import { DeckungsumfangComponent } from './deckungsumfang/deckungsumfang.component';
import { NutzerprofilComponent } from './nutzerprofil/nutzerprofil.component';
import { NutzerComponent } from './nutzer/nutzer.component';
import { FahrzeugKindComponent } from './fahrzeug-kind/fahrzeug-kind.component';





const appRoutes: Routes = [
  {path: 'kvz-versicherung', component: KvzVersicherungComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    KvzVersicherungComponent,
    BestehenderVertragComponent,
    TextfeldComponent,
    FahrzeugangabenComponent,
    ComboboxComponent,
    DatefeldComponent,
    CheckboxComponent,
    RadioComponent,
    TextblockComponent,
    DeckungsumfangComponent,
    NutzerprofilComponent,
    NutzerComponent,
    FahrzeugKindComponent,

  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), FormsModule, MultiselectDropdownModule,
    ReactiveFormsModule
  ],
  providers: [KvzVersicherungService],
  bootstrap: [AppComponent]
})
export class AppModule { }
