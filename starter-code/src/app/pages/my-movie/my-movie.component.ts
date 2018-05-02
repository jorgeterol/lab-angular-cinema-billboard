import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: any;
  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
    this.movie = this.moviesService.getMovie(params.id);
    });
  }

}


