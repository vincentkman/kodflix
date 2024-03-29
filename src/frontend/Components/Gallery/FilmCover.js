import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmCover(props) {
  return(
    <Link to={`/${props.id}`} className='item'>
      <img 
        src={require(`../../common/images/coverImages/${props.id}.jpg`)} 
        alt={props.title} className='mainImg' />
      <div className='overlay'>
        <h3 className='film-title'>{props.title}</h3>
      </div>
    </Link>
  );
}

