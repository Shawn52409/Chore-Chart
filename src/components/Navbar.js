import React from 'react';
import backgroundImage from './img/Teddy-peaking.jpg';

export default function NavBar() {
    return(
        <div id='header' className='navBar' style={{ backgroundImage: `url(${backgroundImage})`}}>
                <div className='text-center'>
                    <h1 className>Casey & Connor's{'\n'}Chore Chart</h1>
                </div>                  
        </div>
    );
};