import React from 'react'
import img from "../../Images/Rules.png"

function Rules() {
    return (
        <div className='rules_container'>
            <div className="rules_div">
                <img src={img} alt="rule" />
                <button className='register-btn'>Register</button>
            </div>
        </div>
    )
}

export default Rules;