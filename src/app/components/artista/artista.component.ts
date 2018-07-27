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

    constructor(private activatedRoute:ActivatedRoute,private spotifyService:SpotifyService) {
    this.activatedRoute.params.subscribe(params=>{
      this.idArtista=params["id"];
    })
   }

  ngOnInit() {
    this.spotifyService.getArtista(this.idArtista).subscribe(datos=>{
      console.log(datos);
    })
  }

}
