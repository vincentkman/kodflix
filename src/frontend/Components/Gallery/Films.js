import React from 'react';
import FilmCover from '../Gallery/FilmCover';
import Loading from '../Loading/Loading';

export default class Films extends React.Component {
  constructor() {
    super();
    this.state = { filmsData: [] };
  }

  componentDidMount() {
    fetch('/rest/filmshows') 
      .then(res => res.json())
      .then(filmsData => this.setState( { filmsData } ))
  }

  render() {
    let films = this.state.filmsData;
    
    if(!films) {
      return <Loading />;
    }
    return (
      <div className='container'>{
        films.map(film => (
          <FilmCover
            key = {film.id}
            id = {film.id}
            title = {film.title}
            src = {film.src}
            alt = {film.title}
          />
        ))
      }</div>
    );
  }
}