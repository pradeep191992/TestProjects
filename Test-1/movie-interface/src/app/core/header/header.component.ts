import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchData: any;
  showDropDown = false;
  constructor(
    public movieService: MovieService,
  ) { }

  ngOnInit(): void {

  }
  dropDownClose(reset: any){
    this.showDropDown = false;
    reset.value = '';
  }


  searchMovie(keyWord: any) {
    console.log(keyWord.value);
    this.movieService.searchListOfMovie(keyWord.value).subscribe(data => {
      console.log(data);
      this.showDropDown = true;
      this.searchData = data;
    })
  }
}
