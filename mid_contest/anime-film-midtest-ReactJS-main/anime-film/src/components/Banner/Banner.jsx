import React from 'react';
import './Banner.css';

export default function Banner({ type, image, movieName, description }) {
    return (
        <>
            {type === 'banner1' ? (
                <div className="banner1">
                    <img src={image} alt="" />
                    <div className="content">
                        <div className="movieName">{movieName}</div>
                        <div className="description">{description}</div>
                    </div>
                </div>
            ) : (
                <div className="banner2">
                    <div className="content">
                        <div className="movieName">{movieName}</div>
                        <div className="description">{description}</div>
                    </div>
                    <img src={image} alt="" />
                </div>
            )}
        </>
    );
}
