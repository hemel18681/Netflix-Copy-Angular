import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = `https://api.themoviedb.org/3`;
  apiKey = `08cc33bd5ae3a747598ce2ad84376e66`;

  bannerMoviesData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  trendingMoviesData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  getSearchMovie(movieName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${movieName}`);
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getMovieTrailer(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }

  getMovieCast(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }
}
