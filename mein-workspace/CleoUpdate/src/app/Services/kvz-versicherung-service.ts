import {Injectable, Input} from '@angular/core';
import { of } from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ArrayObservable} from 'rxjs/observable/ArrayObservable';

export class BestehenderVertrag {

  versicherungsgesellschafte_ein:string='';
  versicherungscheinNr: string;
  vertragsbeginn:Date;
  vertragende:Date;
  beitragBrutto:number;
  zahlweise_ein:string='';
  kuendigung_ein:string='';

  versicherungsgesellschafte =[
    {id:1,name:'Bitte wählen Sie'},
    { id:1 ,name: 'ACE European Group Limited Direktion für Deutschland'},
    { id:2, name: 'ADAC Autoversicherung AG'},
    { id:3 ,name: 'ADLER Versicherung AG'},
    { id:4 ,name: 'AdmiralDirekt.de Niederlassung Deutschland'},
    { id:5 ,name: 'AIOI Insurance Company of Europe Limited Niederlassung für Deutschland'},
    { id:6 ,name:'Aioi Nissay Dowa Insurance Company of Europe Limited'},
    { id:7, name: 'Allianz Versicherungs-AG'},
    { id:8, name:'Allianz Versicherungs-AG Volkswagen Versicherungsdienst GmbH'},
    { id:9 ,name:'AllSecur Deutschland AG'},
    { id:10, name:'ALTE LEIPZIGER Versicherung AG'},
    { id:11,name:'ARAG Allgemeine Versicherungs-AG'},
    { id:12, name:'Arriva Insurance Company (Gibraltar) Limited c/o Van Ameyde Germany AG'},
    { id:13, name:'ASSTEL Sachversicherung AG'},
    { id:14, name:'AVETAS Versicherungs-Aktiengesellschaft'},
    { id:15, name:'AXA Versicherung AG'},
    { id:16, name:'Badische Allgemeine Versicherung AG'},
    { id:17 ,name:'Badischer GemeindeVersicherungs-Verband Körperschaft de s'},
    { id:18, name:'Barmenia Allgemeine Versicherungs-AG'},
    { id:19 ,name:'Basler Securitas Versicherungs-AG'},
    { id:20 ,name:'Bavaria Direkt - Eine Marke der OVAG'},
//  { id:1 labelText:Bayerische Beamten Versicherung AG</option>
//  { id:1 labelText:Bayerischer Versicherungsverband Versicherungs-AG</option>
//  { id:1 labelText:BGV-Versicherung AG</option>
//  { id:1 labelText:BGV-Versicherung Aktiengesellschaft</option>
//  { id:1 labelText:>Bruderhilfe Sachversicherung AG</option>
//  { id:1 labelText:Chartis Europe S.A. Deutschland</option>
//  { id:1 labelText:Concordia Versicherungs-Gesellschaft a.G.</option>
//  { id:1 labelText:Condor Allgemeine Versicherungs-AG</option>
//  { id:1 labelText:>Continentale Sachversicherung AG</option>
//  { id:1 labelText:>Cosmos Versicherung AG</option>
//  { id:1 labelText:>DA Deutsche Allgemeine Versicherung AG</option>
//  { id:1 labelText:DBV Deutsche Beamten-Versicherung AG</option>
//  { id:1 labelText:Debeka Allgemeine Versicherung AG</option>
//  { id:1 labelText:deutsche internet versicherung</option>
//  { id:1 labelText:DEVK Allgemeine Versicherungs-AG</option>
//  { id:1 labelText:DEVK Deutsche Eisenbahn Versicherung a.G.</option>
//  { id:1 labelText:Direct Line Versicherung Aktiengesellschaft</option>
//  { id:1 labelText:ERGO Versicherung Aktiengesellschaft</option>
//  { id:1 labelText:ERGODirekt Versicherung Aktiengesellschaft</option>
//  { id:1 labelText:Euro Insurance (Ireland) Ltd. c/o Van Ameyde Germany AG</option>
//  { id:1 labelText:EUROPA Versicherung AG</option>
//  { id:1 labelText:Fahrlehrerversicherung VaG</option>
//  { id:1 labelText:Feuersozietät Berlin Brandenburg</option>
//  { id:1 labelText:Feuersozietät Berlin Brandenburg Versicherung AG</option>
//  { id:1 labelText:GARANTA Versicherungs-AG</option>
//  { id:1 labelText:GEGENSEITIGKEIT Versicherung Oldenburg</option>
//  { id:1 labelText:Gemeinnützige HaftpflichtVersicherungsanstalt Darmstadt</option>
//  { id:1 labelText:>Generali Versicherung AG</option>
//  { id:1 labelText:Gothaer Allgemeine Versicherung AG</option>
//  { id:1 labelText:>GVV-Kommunalversicherung Versicherungsverein auf Gegenseitigkeit</option>
//  { id:1 labelText:GVV-Privatversicherung Aktiengesellschaft</option>
//  { id:1 labelText:HAHNENBERGER Risk &amp; Service Management GmbH</option>
//  { id:1 labelText:Hannoversche Direkt</option>
//  { id:1 labelText:HanseMerkur Allgemeine Versicherung AG</option>
//  { id:1 labelText:HDI Direkt Versicherung AG</option>
//  { id:1 labelText:HDI Versicherung AG</option>
//  { id:1 labelText:HDI-Gerling Industrie Versicherung AG</option>
//  { id:1 labelText:Helvetia Schweizer. Versicherungsgesellschaft AG</option>
//  { id:1 labelText:>HUK24 AG</option>
//  { id:1 labelText:HUK-COBURG</option>
//  { id:1 labelText:HUK-COBURG-Allgemeine</option>
//  { id:1 labelText:Itzehoer Versicherung/Brandgilde VvaG</option>
//  { id:1 labelText:Janitos Versicherung AG</option>
//  { id:1 labelText:Karlsruher Beamten Der Makler Direktversicherer</option>
//  { id:1 labelText:Karlsruher Versicherung AG</option>
//  { id:1 labelText:KRAVAG-ALLGEMEINE Versicherungs-AG</option>
//  { id:1 labelText:KRAVAG-LOGISTIC Versicherungs-AG</option>
//  { id:1 labelText:>Landesschadenhilfe Versicherung VaG</option>
//  { id:1 labelText:Lippische LandesBrandversicherungsanstalt</option>
//  { id:1 labelText:LVM Landw. Versicherungsverein Münster a.G.</option>
//  { id:1 labelText:LVM Landwirtschaftlicher V.a.G.</option>
//  { id:1 labelText:Mannheimer Versicherung AG</option>
//  { id:1 labelText:>Mecklenburgische Versicherungs-Gesellschaft a.G.</option>
//  { id:1 labelText:MÜNCHENER VEREIN Allgemeine Versicherungs-AG</option>
//  { id:1 labelText:NÜRNBERGER Allgemeine Versicherungs-AG</option>
//  { id:1 labelText:NÜRNBERGER Beamten Allgemeine Versicherung AG</option>
//  { id:1 labelText:Öffentliche Feuerversicherung Sachsen-Anhalt</option>
//  { id:1 labelText:Öffentliche Sachversicherung Braunschweig</option>
//  { id:1 labelText:OKV - Ostdeutsche Kommunalversicherung a.G.</option>
//  { id:1 labelText:Oldenburgische Landesbrandkasse</option>
//  { id:1 labelText:Optima Versicherungs-AG</option>
// <option value="81">ÖSA - Öffentliche Feuerversicherung Sachsen-Anhalt</option>
// <option value="82">OVAG Ostdeutsche Versicherung AG</option>
// <option value="83">prokundo GmbH</option>
// <option value="84">Provinzial Nord Brandkasse AG</option>
// <option value="85">Provinzial Rheinland Versicherung AG</option>
// <option value="86">R+V Allgemeine Versicherung AG</option>
// <option value="87">R+V Direktversicherung AG</option>
// <option value="88">Rheinland Versicherungs AG</option>
// <option value="89">Saarland Feuerversicherung Aktiengesellschaft</option>
// <option value="90">SAV.a.G. Saarbrücker Versicherung AG</option>
// <option value="91">Schwarzmeer und Ostsee Versicherungs AG</option>
// <option value="92">SCHWEIZER NATIONAL Versicherungs-AG</option>
// <option value="93">SIGNAL IDUNA Allgemeine Versicherung AG</option>
// <option value="94">Sparkassen DirektVersicherung AG</option>
// <option value="95">Sparkassen-Versicherung Sachsen Allgemeine Versicherung AG</option>
// <option value="96">SV SparkassenVersicherung Gebäudeversicherung AG</option>
// <option value="97">Uelzener Allgemeine Versicherungs a.G.</option>
// <option value="98">uniVersa Allgemeine Versicherung AG</option>
// <option value="99">VAV Versicherung für die Bauwirtschaft Allg. Vers.-AG</option>
// <option value="100">Versicherungskammer Bayern</option>
// <option value="101">VGH Versicherungen</option>
// <option value="102">VHV Allgemeine Versicherung AG</option>
// <option value="103">VHV AutoversicherungsAktiengesellschaft</option>
// <option value="104">VÖDAG Versicherung für den öffentlichen Dienst</option>
// <option value="105">Volkswagen Versicherung Aktiengesellschaft</option>
// <option value="106">W.R. Berkley Insurance (Europe Limited)  Niederlassung für Deutschland</option>
// <option value="107">Westfälische Provinzial Versicherung AG</option>
// <option value="108">WGV-Schwäbische Allgemeine Versicherung AG</option>
// <option value="109">Württembergische Gemeinde-Versicherung a.G.</option>
// <option value="110">Württembergische Versicherung AG</option>
// <option value="111">WWK Allgemeine Versicherung Aktiengesellschaft</option>
// <option value="112">Zurich Insurance plc. Niederlassung für Deutschland</option>
// Zurich Versicherung AG

  ];


  zahlweise=[
    {id:1,name:'Bitte wählen Sie'},
    {id:1, name:'monatlich'},
    {id:2,name:'1/4 jährlich'},
    {id:3, name:'1/2 jährlich'},
    {id:4 , name:'jährlich'}
  ];

  kuendigung=[
    {id:1,name:'Bitte wählen Sie'},
    {id:1,name:'Durch Versicherer gekündigt'},
    {id:2,name:'Durch VN geküpndigt'}
  ];



}

export class Deckungsumfang {

  schadensfreiheitsrabatt_Haftpflicht_ein:string='';
  sFRegelung_ein:string='';
  kasko_und_selbstbeteiligung_ein:string='';
  deckungssummen_in_der_Kfz_Haftpflicht_ein:string='';
  schutzbriefleistungen_ein:string='';
  verbesserte_zweitwagenregelung_fuer_PKW_ein:string='';
  rabattschutz_ein:string='';
  rabattretter_fuer_PKW_ein:string='';
  fahrerschutz_ein:string='';
  werkstattbindung_ein:string='';
  auslandsschutz_ein:string='';
  rabattuebertragung_ein:string='';
  mallorcapolice_ein:string='';
  gAP_Deckung_ein:string='';

}

export class FahrzeugAngaben {
  kennzeichen1:number | string;
  kennzeichen2:number | string;
  kennzeichen3:number | string;
  zulassungsbezirk_ein:string='';
  erstzulassungsdatum: Date;
  datumFahrzeugerwerb: Date;
  erstbesitz_ein:string='';
  kFZSuchfeld: string;
  herstellerNr:number;
  typschluesselNr:number;
  fahrzeugmarke:string;
  fahrzeugtyp:string;
  fahrgestellNr:number;
  aktuellerKilometerstand:number;
  fahrzeugneuwert:number;
  derzeitigerFahrzeugwert:number;
  sonderausstattungen:number;
}

export class NutzerProfil {

  nutzer =  new Nuzter();

  nutzung_ein:string='';
  jaehrlicheFahrleistung:number;
  nutzerkreis_ein:string='';
  vnHauptnutzer:boolean;
  vnFahrer:boolean;
  begleitetesFahrer:boolean;
  eintragVerkehrszentralregister:boolean;
  zweitwagen:boolean;
  abstellplatz_ein:string='';
  wohneigentum_ein:string='';
  existenzgruender:boolean;
  euFuehrerschein:boolean;
  betriebsausgabe:boolean;
  finanzierungsart_ein:string='';
  vnSteuerabzugsberechtig:boolean;
  nutzung_im_Ausland_ein:string='';
  saisonKennzeichen:boolean;
  vorschaedenLetztenDreiJahren:boolean;

}
export class Nuzter {
  anrede_ein:string='';
  vorname:string;
  nachname:string;
  ort:string;
  postleitzahl:number;
  bezug_ein:string='';
  berufsgruppe_ein:string='';
  familienstand_ein:string='';
  familie:boolean;
  nutzerLebtInHaeuslicherGemeinschaftMitVN:boolean;
  fuehrerscheindatum:Date = new Date();
  hatDerNutzerSeinenFuehrerscheinInEinemLandDerEUErworben:boolean;
  nutzerHatDenFuehrerscheinInDenLetzten10JahrenDurchgehendBesessen:boolean;
  wohnsitzSeitMind10JahrenInBRD:boolean;
  sicherheitstrainingAbsolviert_ein:Date;
  nutzung_ein:string='';
  begleitetesFahrenBeiNutzer:boolean;
  eintragImVerkehrszentralregister:boolean;
  istEinHauptnutzer:boolean;
}

export class FahrzeugKind {
  anrede_ein:string='';
  familienstand_ein:string='';
  vorname:string;
  nachname:string;
  berufsgruppe_ein:string='';
  strasse:string;
  hausnummer:string;
  firmenname:string;
  ort:string;
  postleitzahl:number;
  geburtsdatum:Date;
  branche_ein:string='';

}
export class KvzVersicherung {

  bestehenderVertrag =  new BestehenderVertrag();
  deckungsumfang = new Deckungsumfang();
  fahrzeugAngaben =  new FahrzeugAngaben();
  nutzerProfil =  new NutzerProfil();
  fahrzeugKind =  new FahrzeugKind();


  vertragsbeginnNeuvertrag:Date;
  fuehrerscheindatum:Date;
  sicherheitsTraining:Date;


  sicherheitstrainingAbsolviert:boolean;
  versicherungsgesellschaftAnschreiben:boolean;
  einzugsermaechtigungsverfahren:boolean;
  eVBueErstellungVersicherer:boolean;
  eVBErstellt:boolean;
  versicherungsnehmer: string = '';
  geschaeftsvorfall: string = '';
  zahlweiseneuvertrag: string = '';
  tarifgruppe_ein: string = '';
  branche_ein:string='';
  fahrzeughalter_ein:string='';
  kuendigung_ein:string='';
  schadensfreiheitsrabatt:string='';
  berufsgruppe_ein: string='';



  versicherungsnehmern : {id:number,name:string}[] =[
    {id:1, name:'Max Mustermann'},
    {id:2, name:'Maxime Mustermann'},
    {id:3, name:'Kind Andy Mustermann'},
    {id:4, name:'Max und Maxime Mustermann'}
  ];


  geschaeftsvorfaelle : {id:number,name:string}[]=[
    {id:1, name:'Fahrzeugwechsel'},
    {id:2, name:'Versichererwechsel'},
    {id:3, name:'Zweitwagenregelung'},
    {id:4, name:'Änderunggsantrag'}
  ];

  zahlweiseneuvertraege=[
    {id:1,name:'Bitte wählen Sie'},
    {id:1, name:'monatlich'},
    {id:2,name:'1/4 jährlich'},
    {id:3, name:'1/2 jährlich'},
    {id:4 , name:'jährlich'}
  ];


  tarifgruppe=[
    {id:1,name:'Bitte wählen Sie'},
    {id:1,name:'Beamte/Angestellte im Öffentlichen Dienst'},
    {id:2, name:'Beamte auf lebenszeit'},
    {id:3,name:'Privatperson'},
    {id:4,name:'Selbststandige/Freiberufler'},
    {id:5,name:'Agrarier'}
  ];


  brancheVN=[
    {id:1,name:'Bitte wählen Sie'},
    { id:1 ,name:'Bildung Wissenschaft Forschung Entiwicklung Kultur'},
    { id:2 ,name:'Deutsche Bahn'},
    { id:3 ,name:'Kirche Sonstige Hilfsorganisation'},
    { id:4 ,name:'Oeffentlcihe Verwaltung Justiz'},
    { id:5 ,name:'Polizei BGD QAE'},
    { id:6 ,name:'Feurwehr BW THW QAE'},
    { id:7 ,name:'Post'},
    { id:8 ,name:'Sonstige'},
    { id:9 ,name:'ARCHITEKTEN'},
    { id:10 ,name:'BAUINGENIEURE'},
    { id:11,name:'GARTEN_U_LANDSCHAFTSARCHITEKTEN'},
    { id:12,name:'GUTACHTER_U_SACHVERSTAENDIGER_IM_BAUWESEN'},
    { id:13,name:'INNENARCHITEKTEN'},
    { id:14,name:'RECHTSANWAELTE_NOTARE'},
    { id:15,name:'SONSTIGE_INGENIEURE'},
    { id:16,name:'SONSTIGE_SELBSTSTAENDIGE_FREIBERUFLER'},
    { id:17,name:'STEUERBERATER_WIRTSCHAFTSPRUEFER'},
    { id:18,name:'UNTERNEHMENSBERATER'},
    { id:19,name:'VERSICHERUNGSVERMITTLER'},
    { id:20,name:'AUTOMOBILINDUSTRIE'},
    { id:21,name:'BAUGEWERBE'},
    { id:22,name:'BERGBAU'},
    { id:23,name:'CHEMISCHE_INDUSTRIE'},
    { id:24,name:'IT_DATENVERARBEITUNG'},
    { id:25,name:'DRUCK_MEDIEN'},
    { id:26,name:'EINZELHANDEL_GROSSHANDEL'},
    { id:27,name:'ELEKTROTECHNIK'},
    { id:28,name:'ENERGIE_U_WASSERVERSORGUNG'},


    /*  <option value="ENTSORGUNG_RECYCLING">Entsorgung, Recycling</option>
    <option value="GASTGEWERBE">Gastgewerbe</option>
      <option value="GESUNDHEITS_U_SOZIALWESEN">Gesundheits.- u. Sozialwesen</option>
      <option value="KFZ_HANDEL_KFZ_HANDWERK">KFZ- Handel, KFZ- Handwerk</option>
    <option value="KREDITINSTITUTE_VERSICHERUNGEN">Kreditinstitute, Versicherungen</option>
    <option value="LAND_U_FORSTWIRTSCHAFT_GARTENBAU">Land.- u. Forstwirtschaft, Gartenbau</option>
    <option value="MASCHINENBAU">Maschinenbau</option>
      <option value="PHARMA">Pharma</option>
      <option value="SICHERHEITSGEWERBE">Sicherheitsgewerbe</option>
      <option value="SONSTIGE_DIENSTLEISTUNGEN">sonstige Dienstleistungen</option>
    <option value="SONSTIGE_INDUSTRIE_O_VERARBEITENDES_GEWERBE">sonstige Industrie o. verarbeitendes Gewerbe</option>
    <option value="SONSTIGES_HANDWERK">sonstiges Handwerk</option>
    <option value="STAHLINDUSTRIE">Stahlindustrie</option>
      <option value="TELEKOMMUNIKATION">Telekommunikation</option>
      <option value="TRANSPORT_VERKEHR">Transport, Verkehr</option>*/
  ];


  berufsgruppe =[
    {id:1,name:'Bitte wählen Sie'},
    { id:1 ,name:'Beamter'},
    { id:2 ,name:'Angestellter'},
    { id:3 ,name:'Angestellter  im öffentl.  Dienst'},
    { id:4 ,name:'Angestellter im Innendienst'},
    { id:5 ,name:'Arbeiter'},
    { id:6 ,name:'Selbstständige/Freiberufler'},
    /*"BEAMTER">Beamter</option>
<option value="ANGESTELLTER">Angestellter</option>
    <option value="ANGESTELLTER_IM_OFFENTL_DIENST">Angestellter  im öffentl.  Dienst</option>
<option value="ANGESTELLTER_IM_INNENDIENST">Angestellter im Innendienst</option>
<option value="ARBEITER">Arbeiter</option>
    <option value="SELBSTSTANDIGE_FREIBERUFLER">Selbstständige/Freiberufler</option>
    <option value="AGRARIER">Agrarier</option>
    <option value="RENTNER_PENSIONAR">Rentner/  Pensionär</option>
    <option value="SCHULER_STUDENT_AUSZUBILDENDER">Schüler,  Student,  Auszubildender</option>
<option value="FREIWEILLIGER_WEHRDIENST_ZIVILDIENSTLEISTENDE">freiweilliger Wehrdienst, Zivildienstleistende</option>
<option value="HAUSFRAU_HAUSMANN">Hausfrau/Hausmann</option>
    <option value="ARBEITSLOS">arbeitslos</option>
    <option value="SONSTIGE">Sonstige*/
  ];

  fahrzeughalter=[
    { id:1 ,name:'Versicherungsnehmer'},
    { id:1 ,name:'Sonstiges'},
    { id:1 ,name:'Ehepartner in häuslicher Gemeinschaft '},
    { id:1 ,name:'Lebenspartner in häuslicher Gemeinschaft'},
    { id:1 ,name:'behindertes Kind '},
    { id:1 ,name:'behinderter Elternteil des VN '},
    { id:1 ,name:'Werksangehöriger eines Autoherstellers/-importeurs'},
    { id:1 ,name:'Firmeninhaber'},
    { id:1 ,name:'Firma'},
    { id:1 ,name:'Leasinggeber'},
  ];


  schadensfreiheitsrabatte=[
    {id:1,name:'Bitte wählen Sie'},
    { id:1 ,name:'0'},
    { id:1 ,name:'S'},
    { id:1 ,name:'M'},
    { id:1 ,name:'SF1_2'},
    { id:1 ,name:'SF1'},
    { id:1 ,name:'SF2'},
    { id:1 ,name:'SF3'},
    { id:1 ,name:'SF4'},
    { id:1 ,name:'SF5'},
    { id:1 ,name:'SF6'},
    { id:1 ,name:'SF7'},

    /*<option value="SF8">SF 8</option>
    <option value="SF9">SF 9</option>
    <option value="SF10">SF10</option>
        <option value="SF11">SF11</option>
        <option value="SF12">SF12</option>
        <option value="SF13">SF13</option>
        <option value="SF14">SF14</option>
        <option value="SF15">SF15</option>
        <option value="SF16">SF16</option>
        <option value="SF17">SF17</option>
        <option value="SF18">SF18</option>
        <option value="SF19">SF19</option>
        <option value="SF20">SF20</option>
        <option value="SF21">SF21</option>
        <option value="SF22">SF22</option>
        <option value="SF23">SF23</option>
        <option value="SF24">SF24</option>
        <option value="SF25">SF25</option>
        <option value="SF26">SF26</option>
        <option value="SF27">SF27</option>
        <option value="SF28">SF28</option>
        <option value="SF29">SF29</option>
        <option value="SF30">SF30</option>
        <option value="SF31">SF31</option>
        <option value="SF32">SF32</option>
        <option value="SF33">SF33</option>
        <option value="SF34">SF34</option>
        <option value="SF35">SF35*/
  ];

  sFRegelung=[
    {id:1, name:'Neuzulassung'},
    { id:1,name:'WIEDERINBETRIEBNAHME'},
    { id:2,name:'HALTER_WECHSEL'},
    { id:3,name:'WOHNORT_WECHSEL'},
    { id:4,name:'VERSICHERER_WECHSEL'},
    { id:5,name:'AENDERUNGS_ANTRAG'},
    { id:6,name:'FAHRZEUG_WECHSEL'},
  ];

  kasko_und_selbstbeteiligungen=[
    {id:1,name:'Bitte wählen Sie'},
    { id:1,name:'keine Kaskoversicherung'},
    { id:2,name:'Teilkasko o. SB'},
    { id:3,name:'Teilkasko 150 SB'},
    { id:4,name:'Teilkasko 300 SB'},
    { id:5,name:'Teilkasko 500 SB'},
    { id:6,name:'Teilkasko 1000 SB'},
    { id:7,name:'Vollkasko o. SB, Teilkasko o.  SB'},
    { id:8,name:'Vollkasko 150 SB, Teilkasko o.  SB'},
    { id:9,name:'Vollkasko 150 SB, Teilkasko  150'},
    { id:10,name:'Vollkasko 300 SB, Teilkasko o.  SB'},
    { id:11,name:'Vollkasko 300 SB, Teilkasko 150'},
    /*
<option value="VOLLKASKO_300_SB_TEILKASKO_300_SB">Vollkasko 300 SB, Teilkasko 300 SB</option>
<option value="VOLLKASKO_500_SB_TEILKASKO_O_SB">Vollkasko 500 SB, Teilkasko o.  SB</option>
<option value="VOLLKASKO_500_SB_TEILKASKO_150_SB">Vollkasko 500 SB, Teilkasko 150 SB</option>
<option value="VOLLKASKO_500_SB_TEILKASKO_500_SB">Vollkasko 500 SB, Teilkasko 500 SB</option>
<option value="VOLLKASKO_750_SB_TEILKASKO_750_SB">Vollkasko 750 SB, Teilkasko 750 SB</option>
<option value="VOLLKASKO_1000_SB_TEILKASKO_O_SB">Vollkasko 1000 SB, Teilkasko o. SB</option>
<option value="VOLLKASKO_1000_SB_TEILKASKO_150_SB">Vollkasko 1000 SB, Teilkasko 150 SB</option>
<option value="VOLLKASKO_1000_SB_TEILKASKO_1000_SB">Vollkasko 1000 SB, Teilkasko 1000 SB</option>
<option value="VOLLKASKO_2500_SB_TEILKASKO_O_SB">Vollkasko 2500 SB, Teilkasko o. SB</option>
<option value="VOLLKASKO_2500_SB_TEILKASKO_150_SB">Vollkasko 2500 SB, Teilkasko 150 SB</option>
<option value="VOLLKASKO_2500_SB_TEILKASKO_2500_SB">Vollkasko 2500 SB, Teilkasko 2500 SB</option>
<option value="VOLLKASKO_5000_SB_TEILKASKO_150_SB">Vollkasko 5000 SB, Teilkasko 150 SB</option>
<option value="VOLLKASKO_5000_SB_TEILKASKO_5000_SB">Vollkasko 5000 SB, Teilkasko 5000 SB</option>
*/
  ];


  deckungssummer_in_derk_kfz_haftpflicht=[

    { id:1,name:'mind. gesetzliche Deckung'},
    { id:1,name:'mind. 50 Mio € je Schaden'},
    { id:2,name:'mind. 100 Mio € je Schaden'},

  ];


  schutzbriefleistungen=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  verbesserte_zweitwagenregelegung_fuer_pkw = [
    { id:1,name:'nicht wichtig'},
    { id:2,name:'gewünscht'},
  ];

  rabattschutz=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  rabattretter_fuer_pkw=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  fahrerschutz=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  werksattbindungen=[
    { id:1,name:'ohne Werkstattbindung'},
    { id:1,name:'mit Werkstattbindung'},
  ];

  auslandsschutzen=[
    { id:1,name:'nicht wichtig'},
    { id:1,name:'gewünscht'},
  ];

  rabattuebertragungen=[
    { id:1,name:'keine Rabattübertragung'},
    { id:1,name:'Rabattübertragung eines Verwandten'},
    { id:1,name:'SFR-Übertragung, das bisherige Fahrzeug wird Zweitfahrzeug'}
  ];

  mallorcapolice=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  gap_deckung=[
    { id:1,name:'nein'},
    { id:2,name:'ja'},

  ];

  erstbesitz=[
    { id:1,name:'ja'},
    { id:2,name:'nein'},
    { id:3,name:'Tageszulassung Bis 100 km'},
    { id:4,name:'Tageszulassung Bis 1000 km'},
  ];
  zulassungsbezirk=[

  ];

  nutzungen=[
    { id:1,name:'ausschließlich private'},
    { id:2,name:' überwiegend privat'},
    { id:3,name:'überwiegend gewerblich'},
    { id:4,name:'ausschließlich gewerblich'},

  ];
  nutzerkreise=[

    { id:1,name:'nur der VN'},
    { id:1,name:'nur der Partner'},
    { id:1,name:'VN + Partner + Kinder in häusl. Gemeinschaft'},
    { id:1,name:'nur durch Kinder in häusl. Gemeinschaft'},
    { id:1,name:'VN + andere Fahrer'},
    { id:1,name:'definierter Fahrerkreis'},
    { id:1,name:'offener Fahrerkreis'},
    { id:1,name:'VN + Partner + Eltern häusl. Gemeinschaft'},

  ];
  abstellplaetze=[
    {id:1,name:'Bitte wählen Sie'},
    { id:1,name:'Einzel.-/ Doppelgarage'},
    { id:1,name:'Tief.-/ Sammelgarage'},
    { id:1,name:'Straße'},
    { id:1,name:'Carport auf eigenem Grundstück'},
    { id:1,name:'Carport andere'},
    { id:1,name:'Parkhaus'},
    { id:1,name:'Parkplatz'},
    { id:1,name:'Sonstig'},
  ];
  wohneigentueme=[
    { id:1,name:'kein Wohneigentum'},
    { id:1,name:'Selbstgenutztes Ein-/Zweifamilienhaus'},
    { id:1,name:'Selbstgenutze Eigentumswohnung'},
    { id:1,name:'fremdgenutztes Wohneigentum'},
  ];
  finanzierungsarte=[
    {id:1,name:'Bitte wählen Sie'},
    { id:1,name:'Eigenfinanzierung'},
    { id:1,name:'Kreditfinanzierung'},
    { id:1,name:'Leasing'},

  ];
  nutzung_im_Ausland = [
    {id:1,name:'Bitte wählen Sie'},
    { id:1,name:'Nur EU inkl. Kroatien/Norwegen/Schweiz'},
    { id:1,name:'ohne Einschränkung'},
  ];
  anrede =[
    {id:1,name:'Bitte wählen Sie'},
    { id:1,name:'Herr'},
    { id:1,name:'Frau'},
  ];
  bezug_zu_VN=[
    { id:1,name:'Versicherungsnehmer'},
    { id:1,name:'Partner'},
    { id:1,name:'Sohn'},
    { id:1,name:'Tochter'},
    { id:1,name:'Definierter Fahrer'},
  ];

  familienstand=[
    { id:1,name:'Bitte wählen Sie'},
    { id:1,name:'ledig'},
    { id:1,name:'alleinerziehend'},
    { id:1,name:'verheiratet'},
    { id:1,name:'geschieden'},
    { id:1,name:'verwitwet'},
  ];

}


@Injectable()
export class KvzVersicherungService {

  public kvzVersicherung = new KvzVersicherung();
  kvzVersicherungSpeichern: KvzVersicherung[]=[];

  weiterPersonen: any;

  constructor(){
  }


  // save Formular
  public saveKfzVersicherung(kvzversicherung: KvzVersicherung){
    this.kvzVersicherungSpeichern.push(kvzversicherung);
  }

  public delete(person){
    this.weiterPersonen.splice(person);
  }

  public getVersicherungsgesellschafte(){
    return of(this.kvzVersicherung.bestehenderVertrag.versicherungsgesellschafte);
  }

  public getVersicherunsnehmern()
  {
    return of(this.kvzVersicherung.versicherungsnehmern);
  }
  public getGeschaefstvorfaelle(){
    return of(this.kvzVersicherung.geschaeftsvorfaelle);

  }

  public getZahlweiseneuvertraege(){
    return of(this.kvzVersicherung.zahlweiseneuvertraege);
  }

  public getKuendigung(){
    return of(this.kvzVersicherung.bestehenderVertrag.kuendigung);
  }
  public getTarifgruppe(){
    return of(this.kvzVersicherung.tarifgruppe);
  }

  public getZahlweise(){
    return of(this.kvzVersicherung.bestehenderVertrag.zahlweise);
  }
  public getBrancheVN(){
    return of(this.kvzVersicherung.brancheVN);
  }

  public  getBerufgruppe(){
    return of(this.kvzVersicherung.berufsgruppe);
  }

  public  getFahrzeughalter(){
    return of(this.kvzVersicherung.fahrzeughalter);
  }

  public getschadensfreiheitsrabatt(){
    return of(this.kvzVersicherung.schadensfreiheitsrabatte);
  }

  public getSFRegelung(){
    return of(this.kvzVersicherung.sFRegelung);
  }

  public getKasko_und_selbstbeteiligungen(){
    return of(this.kvzVersicherung.kasko_und_selbstbeteiligungen);
  }

  public getDeckungssummer_in_derk_kfz_haftpflicht(){
    return of(this.kvzVersicherung.deckungssummer_in_derk_kfz_haftpflicht);
  }
  public getSchutzbriefleistungen(){
    return of(this.kvzVersicherung.schutzbriefleistungen);
  }
  public getVerbesserte_zweitwagenregelegung_fuer_pkw(){
    return of(this.kvzVersicherung.verbesserte_zweitwagenregelegung_fuer_pkw);
  }
  public getRabattschutz(){
    return of(this.kvzVersicherung.rabattschutz);
  }
  public getRabattretter_fuer_pkw(){
    return of(this.kvzVersicherung.rabattretter_fuer_pkw);
  }
  public getFahrerschutz(){
    return of(this.kvzVersicherung.fahrerschutz);
  }
  public getWerksattbindungen(){
    return of(this.kvzVersicherung.werksattbindungen);
  }
  public getAuslandsschutzen(){
    return of(this.kvzVersicherung.auslandsschutzen);
  }
  public getRabattuebertragungen(){
    return of(this.kvzVersicherung.rabattuebertragungen);

  }
  public getMallorcapolice(){
    return of(this.kvzVersicherung.mallorcapolice);
  }
  public getGap_deckung(){
    return of(this.kvzVersicherung.gap_deckung);
  }

  public getZulassungsberzirk(){
    return of(this.kvzVersicherung.zulassungsbezirk);
  }
  public getErstbesitz(){
    return of(this.kvzVersicherung.erstbesitz);
  }

  public getNutzung(){
    return of(this.kvzVersicherung.nutzungen);
  }
  public getNutzerkreis(){
    return of(this.kvzVersicherung.nutzerkreise);
  }

  public getAbstellplaetze(){
    return of(this.kvzVersicherung.abstellplaetze);
  }

  public getWohneigentueme(){
    return of(this.kvzVersicherung.wohneigentueme);
  }

  public getFinanzierungsarte(){
    return of(this.kvzVersicherung.finanzierungsarte);
  }
  public getNutzung_im_Ausland(){
    return of(this.kvzVersicherung.nutzung_im_Ausland);
  }
  public getAnrede(){
    return of(this.kvzVersicherung.anrede);
  }
  public getBezugVN(){
    return of(this.kvzVersicherung.bezug_zu_VN);
  }
  public getFamiliestand(){
    return of(this.kvzVersicherung.familienstand);
  }
}



