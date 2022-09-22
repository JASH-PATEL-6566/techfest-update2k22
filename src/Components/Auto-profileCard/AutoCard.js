import React from 'react'
// import img1 from '../../Images/images.avif'
// import img3 from '../../Images/photo.avif'
// import img2 from '../../Images/test.jpg'
import './autocard.css'

function AutoCard() {
    const number_of_cards = 2;

    var counter = 1;

    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1
        }
    }, 3500)

    return (
        <div className="auto-container">
            <div className="slider-auto">
                <div className="slides-auto">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    {/* <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />
                    <input type="radio" name="radio-btn" id="radio5" />
                    <input type="radio" name="radio-btn" id="radio6" /> */}

                    <div className="slide-auto first">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 1</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                    <div className="slide-auto">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 2</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                    <div className="slide-auto">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 3</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                    <div className="slide-auto">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 4</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                    <div className="slide-auto">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 5</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>
                    <div className="slide-auto">
                        <div className="profile-card">
                            <img src="https://i.imgur.com/bZBG9PE.jpg" alt="image1" className="profile-icon" />
                            <div className="profile-name">Kelly Seikma 6</div>
                            <div className="profile-position">Web Designer</div>
                        </div>
                    </div>

                    {/* <div className="slide-auto">
                        <img src={img2} alt="h" />
                    </div>
                    <div className="slide-auto">
                        <img src={img3} alt="h" />
                    </div> */}

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        {/* <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                        <div className="auto-btn6"></div> */}
                    </div>

                    <div className="navigation-manual">
                        <label htmlFor="radio1" className='manual-btn'></label>
                        <label htmlFor="radio2" className='manual-btn'></label>
                        {/* <label htmlFor="radio3" className='manual-btn'></label>
                        <label htmlFor="radio4" className='manual-btn'></label>
                        <label htmlFor="radio5" className='manual-btn'></label>
                        <label htmlFor="radio6" className='manual-btn'></label> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoCard;