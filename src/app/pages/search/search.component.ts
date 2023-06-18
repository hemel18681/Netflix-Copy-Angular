import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm = new FormGroup({
    'movieName': new FormControl('')
  })
  searchResult: any;

  constructor(private service: MovieApiServiceService){}

  submitForm(){
    let movieName = this.searchForm.controls['movieName'].value;
    console.log(movieName)
    if (movieName==null) return;
    this.service.getSearchMovie(movieName).subscribe((data)=>{
      this.searchResult = data.results;
      console.log(this.searchResult)
    })
  }
}
