import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getFilms from '../films-get';

import './Info.css';
import '/Users/vincentman/Desktop/kodflix/src/frontend/KeyFrames.css'

export default class Info extends Component {

    constructor() {
      super();
      this.state = {
        film: {}
      };
    }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => { 
        // console.log(shows);
        this.setState({ shows })
        let filmId = this.props.match.params.filmId;
  
        let film = shows
            .find((film) => film.id === filmId);
        this.setState({ film });
      }).catch(error => console.log(error));
      
   
    }

  render() {
      if(!this.state.film) {
          return <Redirect to='/not-found' />;
      } else {
          return (
              <div className='Info'>
                <h1>{this.state.film.title}</h1>
                <div className='content'>
                  <div className='textbox'><p className='text'>
                  {this.state.film.synopsis}</p></div>
                  <img
                    className='info-image' 
                    src={this.state.film.filmImage}
                    alt={this.state.film.title}/>  
                </div>
                <div className='button'>
                  <Link to='/' className='home-button'>Home page</Link>
                </div>                           
              </div>
            );
        }
    }
}