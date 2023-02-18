import { Component, OnInit } from '@angular/core';
import { MoiveService } from '../moive.service';
import {OwlOptions  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  constructor(private _MoiveService:MoiveService) { }
term:string='black'
trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingPeople:any[]=[];
  ngOnInit(): void {
this._MoiveService.getTrending('movie').subscribe({
  next:(data)=> this.trendingMovies= data.results.slice(0,10)

  
}) 
this._MoiveService.getTrending('tv').subscribe({
  next:(data)=> this.trendingTv= data.results.slice(0,10)

  
}) 
this._MoiveService.getTrending('person').subscribe({
 // next:(data)=> this.trendingPeople= data.results.filter((item:any)=>item.profile_path!==null).slice(0,10)
   next:(data)=> this.trendingPeople= data.results.slice(0,10)

  
}) 
  }

}
