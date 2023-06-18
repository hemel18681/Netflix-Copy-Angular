import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
    movieDetails: any;
    movieTrailer: any;
    movieCast: any;

    constructor(
        private service: MovieApiServiceService,
        private router: ActivatedRoute
    ){}

    ngOnInit(): void {
        const movieId = Number(this.router.snapshot.paramMap.get('id'));
        if(movieId != null) {
            this.getMovie(movieId);
            this.getMovieTrailer(movieId);
            this.getMovieCast(movieId);
        }
    }

    getMovie(movieId: number){
        this.service.getMovieDetails(movieId).subscribe((data)=>{
            this.movieDetails = data
        })
    }

    getMovieTrailer(movieId: number){
        this.service.getMovieTrailer(movieId).subscribe((data)=>{
            data.results.forEach((element:any) => {
                if(element.type=="Trailer") {
                    this.movieTrailer = element.key;
                }
            });
        })
    }

    getMovieCast(movieId: number){
        this.service.getMovieCast(movieId).subscribe((data)=>{
            this.movieCast = data.cast
            console.log(this.movieCast)
        })
    }
}
