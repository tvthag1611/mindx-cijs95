
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>

            <div className='nav-bar'>
                <a href="http://localhost:5173/" className='logo'>Anonime</a>
                <ul className='nav-item-list'>
                    <li>Home</li>
                    <li>List anime</li>
                </ul>

                <input type="text" placeholder="Search anime or movie" className='search-bar' />
            </div>

            <div className="menu">
                <h4 className='title'>Explore</h4>
                <p>What are you gonna watch today?</p>
                <div className="review">
                    <img src="" alt="" />
                    <div className="review-content">
                        <div className="anime-name"></div>

                        <div className="anime-review">
                            
                        </div>
                    </div>
                </div>


            </div>

            <div className="new-release">

            </div>
        </div>


    );
};

export default Navbar;
