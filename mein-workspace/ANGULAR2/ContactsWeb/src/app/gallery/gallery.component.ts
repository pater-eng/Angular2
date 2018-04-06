import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos: any;
  currentPageFoto:number=1;
  size:number=5;
  pagesFoto:Array<number>;
  totalPagesFotos:number;

  constructor(private http:Http) { }

  ngOnInit() {
  }
  // data sont les donnees ki seront saisir à l'interieur du formulaire
  onSearch(data){
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    console.log(data);
    // per_page: ici je specifie le nbr de Donnees. page est la page ke je veux avoir
    // .map: ici seront la reponse ke je convertis en JSON en appelant la Methode json() et retourne un Obj de type Observable. Pour acceder o donnees, il fo se souscrire
    // .subscribe
    // data se sont les donnees ke je lis
    //  this.http.get("https://pixabay.com/api/?key=8426035-a1bdca0e9448da80e0a9286ca&q="
    //                   + data.suchenWort + "&per_page=10&page=1")
    this.http.get("https://pixabay.com/api/?key=8426035-a1bdca0e9448da80e0a9286ca&q=" + data.suchenWort + "&per_page=" + this.currentPageFoto + "&page= " + this.size)
      .map(resp=>resp.json())
      .subscribe(data=>{
        console.log(data);
        this.pagePhotos = data;
        this.totalPagesFotos = data.totalHits/this.size;
          if(data.totalHits % this.size !=0)
            ++this.totalPagesFotos;
          this.pagesFoto= new Array(this.totalPagesFotos);
      });

  }

}
