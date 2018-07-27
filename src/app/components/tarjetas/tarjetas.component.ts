import { Component, OnInit, Input } from '@angular/core';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { Router} from "@angular/router"

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[]=[];
  idArtista:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verArtista(item:any){
    if(item.type==="album"){
      this.idArtista=item.artists[0].id;
    }
    if(item.type==="artist"){
      this.idArtista=item.id;
    }
    this.router.navigate(['/artist',this.idArtista]);
  }
}
