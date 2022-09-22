import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './autoplay.css'

export default function App() {
    return (
        <div className='outer-autoplay-mobile'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="autoplay">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 1</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 2</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="autoplay">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 1</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 2</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="autoplay">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 1</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 2</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}