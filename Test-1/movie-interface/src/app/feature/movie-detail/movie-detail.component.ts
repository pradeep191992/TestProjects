import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieData: any;
  id: any;
  constructor(
    public movieService: MovieService,
    public activateRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe((params: Params) => { 
      this.id = params.id;
      this.movieService.getMovieDetails(this.id).subscribe(data => {
        this.movieData = data;
        console.log(data);
      });
    });
  }

}
