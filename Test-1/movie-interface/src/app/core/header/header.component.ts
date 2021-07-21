import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchData: any;
  constructor(
    public movieService: MovieService,
  ) { }

  ngOnInit(): void {

  }
  searchMovie(keyWord: any) {
    console.log(keyWord.value);
    this.movieService.searchListOfMovie(keyWord.value).subscribe(data => {
      console.log(data);
      this.searchData = data;
    })
  }
}
