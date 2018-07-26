import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any=[];
  termino:boolean;

  constructor(private spotify:SpotifyService) { 
    this.termino=false;
  }

  ngOnInit() {
  }
  buscar(termino:string){
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data:any)=>{
      console.log(data);
      this.artistas=data;
    })
    this.termino=true;
  }

}
