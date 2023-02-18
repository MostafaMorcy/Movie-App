import { Component, OnInit } from '@angular/core';
import { MoiveService } from '../moive.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  constructor(private _MoiveService:MoiveService) { }
  trendingPeople:any[]=[];

  ngOnInit(): void {
    
this._MoiveService.getTrending('person').subscribe({
  // next:(data)=> this.trendingPeople= data.results.filter((item:any)=>item.profile_path!==null).slice(0,10)
    next:(data)=> this.trendingPeople= data.results.slice(0,10)
 
   
 }) 
  }

}
