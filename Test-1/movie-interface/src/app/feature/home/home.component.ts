import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieListData: any;
  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getListOfMovieDetails().subscribe(data => {
      this.movieListData = data;
      console.log(data);
    })
  }

  goToDetail(event: any){
    console.log(event);
  }

}
