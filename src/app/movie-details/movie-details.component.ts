import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoiveService } from '../moive.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  mediaType:string=''
itemDetails:any;
similarMovies:any[]=[]
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoiveService:MoiveService) { }

  ngOnInit(): void {
   let {id,media_type}= this._ActivatedRoute.snapshot.params;
   this.mediaType=media_type;
    this._MoiveService.getDetails(id,media_type).subscribe({
      next:(data)=>this.itemDetails=data 
    })  
  this._MoiveService.getSimilar(id,media_type).subscribe({
    next:(data)=>this.similarMovies=data.results.slice(0,6)
  })
  }
  getSimilar(id:string,media_type:string){
    this._MoiveService.getDetails(id,media_type).subscribe({
      next:(data)=>this.itemDetails=data 
    })
    this._MoiveService.getSimilar(id,media_type).subscribe({
      next:(data)=>this.similarMovies=data.results.slice(0,6)
    })
  
  }

}
