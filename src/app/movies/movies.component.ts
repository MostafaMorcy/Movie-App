import { Component, OnInit } from '@angular/core';
import { MoiveService } from '../moive.service';
MoiveService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoiveService:MoiveService) { }
  trendingMovies:any[]=[];
  searchKey:string=''
  pageItem=[1,2,3,4,5,6,7,8,9,10] // must func for loop count 1 to 10
  ngOnInit(): void {
    this.getPageItems(1)

    this._MoiveService.getTrending('movie').subscribe({
      next:(data)=> this.trendingMovies= data.results
    
      
    }) 
  }
  getPageItems(num:number){
console.log(num);
this._MoiveService.getPaginatedMovies(num).subscribe({
  next:(data)=>this.trendingMovies=data.results 
})
  }

}
