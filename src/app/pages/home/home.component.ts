import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bannerMoviesData:any = [];
  trendingMoviesData:any = [];

  constructor(private service: MovieApiServiceService){}

  ngOnInit(): void {
    this.bannerMovies();
    this.trendingMovies();
  }

  // onWheel(event: WheelEvent): void {
  //   if (event.deltaY > 0 && event.x) {
  //     event.preventDefault();
  //     document.getElementById('rowposter')!.scrollLeft += 160;
  //   }
  //   else {
  //     document.getElementById('rowposter')!.scrollLeft -= 160;
  //   }
  // }

  bannerMovies(){
    this.service.bannerMoviesData().subscribe((data) => {
      console.log(data);
      this.bannerMoviesData = data.results;
    })
  }

  trendingMovies(){
    this.service.trendingMoviesData().subscribe((data) => {
      console.log(data);
      this.trendingMoviesData = data.results;
    })
  }
}
