import { MovieInterfaceModel } from './../modals/movie-interface.modal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  // https://www.omdbapi.com/?s=Batman&page=1&apikey=d31e0744
  // http://www.omdbapi.com/?i=tt0372784&apikey=d31e0744

  apiKey = 'd31e0744';
  // url = "http://www.omdbapi.com/?i=tt0372784&apikey=";
  url = 'https://www.omdbapi.com/?';
  
  constructor(
    private http: HttpClient
  ) { }

  getMovieDetails(id: any): Observable<MovieInterfaceModel> {
    return this.http.get<MovieInterfaceModel>(this.url+'i='+id+'&plot=full'+'&apikey='+this.apiKey);
  }

  getListOfMovieDetails(): Observable<MovieInterfaceModel> {
    return this.http.get<MovieInterfaceModel>(this.url+'s=batman&apikey='+this.apiKey);
  }

  searchListOfMovie(keyWord: any): Observable<MovieInterfaceModel> {
    return this.http.get<MovieInterfaceModel>(this.url+'s='+keyWord+'&apikey='+this.apiKey);
  }

  // getSinglegetMovieDetails(id: any): Observable<MovieInterfaceModel> {
  //   return this.http.get<MovieInterfaceModel>(this.url+'[yourkey]&').pipe( map(
  //    (response: any) => {
  //     return response.find((p: any) => p.id == id);
  //    }));
  // }

  // searchgetMovieDetails(value: string): Observable<MovieInterfaceModel> {
  //   return this.http.get<MovieInterfaceModel>(this.url+'[yourkey]&').pipe( map(
  //    (response: any) => {
  //     return response.filter((data: any) =>
  //       JSON.stringify(data).toLowerCase().includes(value.toLowerCase())
  //     )
  //    }
  //   ));
  // }


}
