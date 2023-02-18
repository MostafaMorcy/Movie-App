import { Component, OnInit } from '@angular/core';
import { MoiveService } from '../moive.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {

  constructor(private _MoiveService:MoiveService) { }
  trendingTv:any[]=[];

  ngOnInit(): void {
    
this._MoiveService.getTrending('tv').subscribe({
  next:(data)=> this.trendingTv= data.results

  
}) 
  }

}
