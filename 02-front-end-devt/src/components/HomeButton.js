import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './homebutton.scss';

function HomeButton() {
    return (
        <div className='home-button'>
            <Link to='/'>
                <HomeIcon fontSize='large' />
            </Link>
        </div>
    );
}

export default HomeButton;
