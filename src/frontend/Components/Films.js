import React from 'react';
import FilmCollections from './FilmCollections';
import getFilms from './films-get';

export default function Films() {
    return (
      <div>
        <div className='container'>
            {
                getFilms().map(filmCollections => (
                    <FilmCollections
                        key={filmCollections.id}
                        id={filmCollections.id}
                        title={filmCollections.title}
                        filmImage={filmCollections.filmImage} />
                ))
            }
        </div>
      </div>
    );
  }

