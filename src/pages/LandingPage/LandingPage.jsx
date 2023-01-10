import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router';
const LandingPage = () => {
    const navigate = useNavigate();
    return (<main>
        <section className="home mt-0" id="home">
            <div className="content">
                <h1 style={{
                    fontWeight: 'bold'
                }}>Maintain your Achievements like never before.</h1>
                <p>A way for college faculties to organise and maintain their achievements digitally with minimal efforts. All your progress under one roof.</p>
            </div>
            <div className="image">
                <img src="images/feed1.png" alt="" />
            </div>
        </section>

        <section className="features mt-20" id="features">

            <h1 className="heading">Features to Help your achievements thrive</h1>

            <div className="box-container">
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature1-img" src="images/feature1.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Add new Achievements on the go</h2>
                        <p>Just click on the add new button and add a new achievement effortlessly</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature2-img" src="images/feature2.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Edit your achievements when necessary</h2>
                        <p>We humans make a lot of mistakes. Just edit the achievement to rectify them.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature3-img" src="images/feature3.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>View and Edit your profile</h2>
                        <p>View and edit your personal information whenever needed.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature4-img" src="images/feature4.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>A seamless experience</h2>
                        <p>Wooohoo! Look at that organised and well maintained data you got there. Perfect!</p>
                    </div>
                </div>
            </div>

        </section>

        {/* <!-- Team Section starts --> */}

        <section className="team" id="team">
            <h1 className="heading">Meet our Team</h1>
            <div className="team-container">
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="https://www.linkedin.com/in/karnika-rajput-365159210/overlay/photo/" href = "https://www.linkedin.com/in/karan-banjade-929b9a167/" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Karan Banjade</h3>
                            <span>Full Stack Developer</span>
                            <div className="social-icons flex justify-between">
                            <span>
                                <a href='https://github.com/KaranBanjade' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50" >
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                </svg>
                                </a>
                            </span>
                            <span>
                            <a href='https://www.linkedin.com/in/karan-banjade-929b9a167/' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                                </svg>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Abhishek Gupta</h3>
                            <span>Backend Developer</span>
                            <div className="social-icons flex justify-between">
                            <span>
                            <a href='https://github.com/abhishekg323' target={"_blank"} rel={"noreferrer"}  >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                </svg>
                                </a>
                            </span>
                            <span>
                            <a href='https://www.linkedin.com/in/abhishekg323/' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                                </svg>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Tarni</h3>
                            <span>Frontend Developer</span>
                            <div className="social-icons flex justify-between">
                            <span>
                            <a href='https://github.com/tarnibalgoher5' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                </svg>
                                </a>
                            </span>
                            <span>
                            <a href='https://www.linkedin.com/in/tarni-balgoher-159879241/' target={"_blank"} rel={"noreferrer"}  >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                                </svg>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Karnika</h3>
                            <span>Frontend Developer</span>
                            <div className="social-icons flex justify-between">
                            <span>
                            <a href='https://github.com/karnika22' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                </svg>
                                </a>    
                            </span>
                            <span>
                            <a href='https://www.linkedin.com/in/karnika-rajput-365159210/' target={"_blank"} rel={"noreferrer"} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50"
                                    viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                                </svg>
                                </a>
                            </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer">

            <div className="footer-container">
                <img className="brand" src="images/FPRSquare.png" alt="FCAMs" width={"200px"} height={"200px"} />
                <div className="box">
                    <h3>Contact Info</h3>
                    <a className="links"> <i className="fas fa-envelope" /> msifmsys@gmail.com </a>
                    <a className="links"> <i className="fas fa-map-marker-alt" /> Delhi, India - 110020 </a>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#home" className="links">  Home </a>
                    <a href="#features" className="links"> Features </a>
                    <a href="#contact" className="links">  Our Team </a>
                </div>

            </div>

            {/* <div className="credit"><span> FCAMs </span> | All Rights Reserved </div> */}

        </section>
    </main>)
};

export default LandingPage;
