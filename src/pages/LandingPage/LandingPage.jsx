import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (<main>
        {/* <header>
            <img className="brand" src="images/FPRSquare.png" alt="FCAMs" width={"90px"} height={"80px"}/>
            <nav className="navbar">
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <button className="btn" type='button'>
                    LOG IN
                </button>
            </nav>
        </header> */}

        <section className="home" id="home">

            <div className="content">
                <h1>We appreciate your feedback</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consectetur suscipit aut ut eos odio
                    nobis minima officiis mollitia tempore.</p>
            </div>
            <div className="image">
                <img src="images/feed1.png" alt="" />
            </div>
        </section>

        <section className="features" id="features">

            <h1 className="heading">Features</h1>

            <div className="box-container">
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature1-img" src="images/feature1.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Feature1</h2>
                        <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc
                            urna
                            lectus, erat ligula. Hendrerit nam.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature2-img" src="images/feature2.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Feature2</h2>
                        <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc
                            urna
                            lectus, erat ligula. Hendrerit nam.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature3-img" src="images/feature3.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Feature3</h2>
                        <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc
                            urna
                            lectus, erat ligula. Hendrerit nam.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="feature-img-container">
                        <img className="feature4-img" src="images/feature4.png" alt="features-img" />
                    </div>
                    <div className="feature-text">
                        <h2>Feature4</h2>
                        <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc
                            urna
                            lectus, erat ligula. Hendrerit nam.</p>
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
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Karan Banjade</h3>
                            <a href="mailto:ayushpun504@gmail.com">
                                <span>addyourmail@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Abhishek Gupta</h3>
                            <a href="mailto:rharsh242@gmail.com">
                                <span>addyourmail@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Abhishek Gupta</h3>
                            <a href="mailto:rharsh242@gmail.com">
                                <span>addyourmail@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="landcard">
                    <div className="card-content">
                        <div className="card-imgbox">
                            <img src="" alt="" />
                        </div>
                        <div className="card-contentbox">
                            <h3>Abhishek Gupta</h3>
                            <a href="mailto:rharsh242@gmail.com">
                                <span>addyourmail@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="footer">

            <div className="footer-container">
                <img className="brand" src="images/FPRSquare.png" alt="FCAMs" width={"100px"} height={"100px"}/>
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
