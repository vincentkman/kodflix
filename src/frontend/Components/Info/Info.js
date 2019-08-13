import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../Loading/Loading';

import './Info.scss';

export default class Info extends Component {

    constructor() {
      super();
      this.state = { film: {} };
    }

  componentDidMount() {
    let filmId = this.props.match.params.filmId;
    fetch(`/rest/filmshows/${filmId}`)
      .then(res => res.json())
      .then(film => 
        { this.setState({ film });
      })
      .catch(error => console.log(error));
    }

  render() {
    let film = this.state.film;

      if(film) {
         return film.id ?
          <InfoContent film = {film} /> :
          <Loading />
      } else {
        return <Redirect to='/not-found' />;
      }
    }
  }


function InfoContent({ film }) {
  let url = require(`../../common/images/coverImages/${film.id}.jpg`);
  return (
    <div className='Info'>
      <h1>{film.title}</h1>
      <div className='content'>
        <div className='textbox'><p className='text'>
        {film.synopsis}</p></div>
          <img
            className='info-image' 
            src={url}
            alt={film.title}/>  
        </div>
        <div className='button'>
          <Link to='/' className='home-button'>Home page</Link>
        </div>                           
    </div>
  );
}
