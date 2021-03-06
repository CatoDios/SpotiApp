import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevas_canciones:any =[];
  loading:boolean=true;
  constructor(private spotify:SpotifyService) { 
    
    this.spotify.getNewReleases().subscribe((data:any)=>{
      this.nuevas_canciones=data;
      console.log(this.nuevas_canciones);
      this.loading=false;
    });
  }


  ngOnInit() {
  }

  onSubmit(){

  }
}
