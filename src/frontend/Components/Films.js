import React from 'react';
import FilmCollections from './FilmCollections';

export default class Films extends React.Component {
  constructor() {
    super();
    this.state = { filmsData: [] };
  }

  componentDidMount() {
    fetch('/rest/filmShows') 
      .then(res => res.json())
      .then(filmsData => this.setState( { filmsData } ))
  }

  render() {
    let films = this.state.filmsData;
    return (
      <div className='container'>{
        films.map(film => (
          <FilmCollections
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



// export default function Films() {
//     return (
//       <div>
//         <div className='container'>
//             {
//                 getFilms().map(filmCollections => (
//                     <FilmCollections
//                         key={filmCollections.id}
//                         id={filmCollections.id}
//                         title={filmCollections.title}
//                         filmImage={filmCollections.filmImage} />
//                 ))
//             }
//         </div>
//       </div>
//     );
//   }

