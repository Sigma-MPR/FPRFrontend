import React from 'react';
import './LandingPagev2.css';
import { useNavigate } from 'react-router';
import { Slide } from "react-awesome-reveal";
const LandingPage = () => {
    const navigate = useNavigate();
    return (<main>
        <section className="home mt-0" id="home">
            <div className="content">
                <h1>Maintain your achievements like never before!</h1>
                <p>One-stop destination for showcasing and preserving the accomplishments of faculty members.</p>
            </div>
            <div className="image">
                <img src="images/header-illustration.png"  />
            </div>
        </section>

        <section className="features mt-20" id="features">

            <h1 className="heading">Powering up your professional growth</h1>
            <h3 className="subheading">Features to help you thrive</h3>

            <div className="box-container">
                <Slide direction='up' triggerOnce>
                    <div className="container">
                        <div className="feature-img-container">
                            <img className="feature1-img" src="images/i1.png"  />
                        </div>
                        <div className="feature-text">
                            <h2>Add new achievements on the go</h2>
                            <p>Just click on the add new button and add a new achievement effortlessly</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className="container">
                        <div className="feature-img-container">
                            <img className="feature2-img" src="images/i2.png"  />
                        </div>
                        <div className="feature-text">
                            <h2>Edit your achievements when necessary</h2>
                            <p>We humans tend to make a lot of mistakes. Just edit the achievement to rectify them.</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className="container">
                        <div className="feature-img-container">
                            <img className="feature3-img" src="images/i3.png"  />
                        </div>
                        <div className="feature-text">
                            <h2>View and edit your profile</h2>
                            <p>View and edit your personal information whenever needed.</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className="container">
                        <div className="feature-img-container">
                            <img className="feature4-img" src="images/i4.png"  />
                        </div>
                        <div className="feature-text">
                            <h2>A seamless experience</h2>
                            <p>Wooohoo! Look at that organised and well maintained data you got there. Perfect!</p>
                        </div>
                    </div>
                </Slide>
            </div>

        </section>

        <section className="team" id="team">
            <h1 className="heading">Meet our Team</h1>
            <div className="cards-container">
                <div className="card">
                    {/* <div class="card-image">
                        <img src="https://media.licdn.com/dms/image/C5603AQFL41D5AcCZ1g/profile-displayphoto-shrink_800_800/0/1657896080027?e=1678924800&v=beta&t=uYN4sRqw3PX4CMvzYkJKX_3I1Ekepq45qIosS-EloBE"  />
                    </div> */}
                    <div class="card-info">
                        <h3>Abhishek Gupta</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="contact-links">
                        <a href="https://github.com/abhishekg323" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/abhishekg323/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card">
                    {/* <div class="card-image">
                        <img src="https://media.licdn.com/dms/image/C4D03AQEat9Oq7ubdMw/profile-displayphoto-shrink_800_800/0/1658173174211?e=1678924800&v=beta&t=F0T9oiSVXHAROnFBKlFz4LnjDFWPe0PELfHyDM_v2C8"/>
                    </div> */}
                    <div class="card-info">
                        <h3>Karan Banjade</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="contact-links">
                        <a href="https://github.com/KaranBanjade" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/karan-banjade-929b9a167/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card">
                    {/* <div class="card-image">
                        <img src="https://media.licdn.com/dms/image/C4D03AQEkDUx3SXkYuA/profile-displayphoto-shrink_800_800/0/1659710666075?e=1678924800&v=beta&t=uTyxJtncauSTITYXLvvJBW7ReZzilugKctrgX3x4_F4"  />
                    </div> */}
                    <div class="card-info">
                        <h3>Karnika Rajput</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="contact-links">
                        <a href="https://github.com/karnika22" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/karnika-rajput-365159210/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card">
                    {/* <div class="card-image">
                        <img src="https://media.licdn.com/dms/image/D4D03AQFrK9BILbtTCw/profile-displayphoto-shrink_800_800/0/1668946907400?e=1678924800&v=beta&t=zNwCp2xy9xs-f3iwXdtxkKuhF-gQN9VKQM70AJGZh9Q"  />
                    </div> */}
                    <div class="card-info">
                        <h3>Tarni Balgoher</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="contact-links">
                        <a href="https://github.com/tarnibalgoher5" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/tarni-balgoher-159879241/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B95E9" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <section className="footer">

            <div className="footer-container">
                <img className="brand" src="images/FPRSquare.png"  width={"200px"} height={"200px"} />
                <div className="box">
                    <h3>Contact Info</h3>
                    <a href='mailto:msifmsys@gmail.com' className='reachout-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        msifmsys@gmail.com
                    </a>
                    <a className='reachout-link'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                        Delhi, India - 110020
                    </a>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#home" className="links">  Home </a>
                    <a href="#features" className="links"> Features </a>
                    <a href="#contact" className="links">  Our Team </a>
                </div>

            </div>

        </section>
    </main>)
};

export default LandingPage;
