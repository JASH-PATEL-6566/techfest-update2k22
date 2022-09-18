import React from 'react'
import img from '../../Images/test.jpg'
import './eventcard.css'

function EventCard() {
    return (
        <div className="event-container">
            <div className="event-card-container">
                <div className="event-card">
                    <img className='image' src={img} alt="img" />
                    <div className="overlay">
                        <div className="text">
                            Event
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventCard