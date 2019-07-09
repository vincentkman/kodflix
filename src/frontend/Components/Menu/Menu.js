import React from 'react';
// import MenuIcon from '../Menu/MenuIcon';
import MenuIcon from '../Menu/menu.svg';
import './Menu.scss';

export default class Menu extends React.Component {
    menuOpen() {
        console.log('toggle menu');
    }
    
    render() {
        return (
        <div className='menu'>
            <button className='menu-btn' onClick={this.menuOpen}>
                <img src={MenuIcon} alt='Menu'/>
            </button>
        </div>
        );
    }
} 