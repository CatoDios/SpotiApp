import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"
import { SpotifyService} from "../../services/spotify.service"
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  idArtista:any;
  artista:any;
  topTracks:any[];
  
  constructor(private activatedRoute:ActivatedRoute,private spotifyService:SpotifyService) {
      this.activatedRoute.params.subscribe(params=>{
      this.idArtista=params["id"];
    })
   }

  ngOnInit() {
    this.getArtista(); 
    this.getTopTracks();
  }

  getArtista(){
    this.spotifyService.getArtista(this.idArtista).subscribe(datos=>{
      this.artista=datos;
      console.log(this.artista);
  });
  }

  getTopTracks(){
    this.spotifyService.getTopTracks(this.idArtista).subscribe(datos=>{
      this.topTracks=datos;
      console.log(this.topTracks);
  });
  }

}
  
