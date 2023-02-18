import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoiveService {

  constructor(private _HttpClient:HttpClient) { }

getTrending(mediaType:string): Observable<any>{
return this._HttpClient.get(  `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=`)
  }
  getDetails(id:string,mediaType:string): Observable<any>{
    return this._HttpClient.get(  `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=&language=en-US`)
      }
      getSimilar(id:string,mediaType:string): Observable<any>{
        return this._HttpClient.get(  `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=&language=en-US&page=1`)
          }

getPaginatedMovies(page:number):Observable<any>{
return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}

}


//fcba8b1bf14befeab6d05aed4c7c53b6
//fcba8b1bf14befeab6d05aed4c7c53b6

//https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=&language=en-US&page=1