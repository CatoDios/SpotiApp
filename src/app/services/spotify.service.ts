import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  httpBase:string="https://api.spotify.com/v1/";
  authorization:string="Bearer BQBiHV3L_DVe2TKBzBsH4QRPIvwrW6_w9gbW0kCAGpgfgOM2irtKQiDi0iaQNZt5w0nGoBH7Watn3K477Vk"

  constructor(private http:HttpClient) { }

  getNewReleases(){
    const headers= new HttpHeaders({
      "Authorization":this.authorization
    })

    return this.http.get(this.httpBase+"browse/new-releases",{headers})
    .pipe( map((data:any)=>{
      return data.albums.items
    }));

    
  }
  
  getArtistas(termino:string){
    const headers= new HttpHeaders({
      "Authorization": this.authorization
      })

    return this.http.get(this.httpBase+`search?q=${termino}&type=artist&limit=10`,{headers})
    .pipe(map((data:any)=>{
        return data.artists.items;
    }));
  
  }
  getArtista(id:string){
    const headers= new HttpHeaders({
      "Authorization": this.authorization
      })

    return this.http.get(this.httpBase+`artists/${id}`,{headers})
    .pipe(map((data:any)=>{
        return data;
    }));
  
  }
}
