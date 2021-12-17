import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className = "homepage">  
    <h1>Home</h1>
            <Directory/>
    </div>
)

export default HomePage;