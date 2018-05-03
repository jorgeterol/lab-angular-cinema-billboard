import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { movies } from '../../sample-movies';

@Injectable()
export class MoviesService {

  movies: any = movies;
  
  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    id = +id;
    return this.movies.find((movie) => {
      return movie.id === id;
    });

  };

}


