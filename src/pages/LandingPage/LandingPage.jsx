import { Link } from 'react-router-dom';
// services
// import { getUserAccessToken } from '@services/storageServices';
//assets
// import AppLogo from '@assets/images/AppLogo.svg';
// import 'images/feature1.png' from 'images/feature1.png';
// import data_illustration from 'images/feature1.png';
// import edit_illustration from 'images/feature1.png';
// import track_illustration from 'images/feature1.png';
// import profile_illustration from 'images/feature1.png';
// import happy_illustration from 'images/feature1.png';
// import KaranPic from '@assets/images/karanPic.jpg';
// import AbhishekSPic from '@assets/images/AbhishekSPic.jpg';
// import AbhishekGPic from '@assets/images/AbhishekGPic.png';
// import SriramPic from '@assets/images/sriramPic.jpg';
// import TanishcqPic from '@assets/images/tanishcqPic.jpg';
// import OmPic from '@assets/images/OmPic.jpeg';
// import SahilPic from '@assets/images/SahilPic.png';
//styles
import './LandingPage.css';
// import { Footer } from '@components/';

const LandingPage = () => {
	// const isLoggedIn = getUserAccessToken();
	return (
		<div className='landing-page-wrapper'>
			{/* <!-- hero section --> */}
				<div className='hero'>
					<div className='landcontainer'>
						<div className='content-container'>
							<h1>Maintain your Achievements like never before.</h1>
							<p>
								A way for college faculties to organise and maintain their
								achievements digitally with minimal efforts. All your progress
								under one roof.
							</p>
						</div>
						<div className='img-container'>
							{/* <img src={data_illustration} alt='' /> */}
						</div>
					</div>
				</div>
			{/* </header>  */} 

			{/* <!-- features --> */}

			<section className='landing-features'>
				<h2>Features to Help your achievements thrive</h2>
				<div className='wrapper'>
					<div className='features-container'>
						<div className='feature-img'>
							<img src={'images/feature1.png'} alt='Add logo' />
						</div>
						<div className='feature-content'>
							<h2>Add new Achievements on the go</h2>
							<p>
								Just click on the plus icon and add a new achievement
								effortlessly
							</p>
						</div>
					</div>
					<div className='features-container'>
						<div className='feature-img'>
							<img src={'images/feature1.png'} alt='Edit logo' />
						</div>
						<div className='feature-content'>
							<h2>Edit your achievements when necessary </h2>
							<p>
								We humans make a lot of mistakes. Just edit the achievement to
								rectify them.
							</p>
						</div>
					</div>
					<div className='features-container'>
						<div className='feature-img'>
							{/* <img src={track_illustration} alt='Add logo' /> */}
						</div>
						<div className='feature-content'>
							<h2>Track your progress</h2>
							<p>
								Detailed charts and analytics help you track your progress over
								time.
							</p>
						</div>
					</div>
					<div className='features-container'>
						<div className='feature-img'>
							{/* <img src={profile_illustration} alt='Add logo' /> */}
						</div>
						<div className='feature-content'>
							<h2>View and Edit your profile</h2>
							<p>View and edit your personal information whenever needed.</p>
						</div>
					</div>
					<div className='features-container'>
						<div className='feature-img'>
							{/* <img src={happy_illustration} alt='Add logo' /> */}
						</div>
						<div className='feature-content'>
							<h2>A seamless experience</h2>
							<p>
								Wooohoo! Look at that organised and well maintained data you got
								there. Perfect!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <section className='landing-team'>
				<h2 className='team-head'>Meet Our Team</h2>
				<div className='team-container'>
					<div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={OmPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>Om gupta</h3>
								<a href='mailto:omgupta1608@gmail.com'>
									<span>omgupta1608@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/omgupta1608'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/om-gupta-aaa0981a8/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>

					{/* <div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={SriramPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>Sriram</h3>
								<a href='mailto:sriramiyer.dev@gmail.com'>
									<span>sriramiyer.dev@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.github.com/Pika-Pool'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/sriram-iyer-11b4291a3/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>

					<div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={SahilPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>sahil</h3>
								<a href='mailto:sahilchalia20@gmail.com'>
									<span>sahilchalia20@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/sahilchalia'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/sahil-kumar-a511201b6/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div> */}

					{/* <div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={KaranPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>Karan Banjade</h3>
								<a href='mailto:karan.banjade@gmail.com'>
									<span>karan.banjade@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/KaranBanjade'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/karan-banjade-929b9a167/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>

					<div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={AbhishekGPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>Abhishek Gupta</h3>
								<a href='mailto:abhishekg323@gmail.com'>
									<span>abhishekg323@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/abhishekg323'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/abhishekg323/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>

					<div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={TanishcqPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>tanishcq mehta</h3>
								<a href='mailto:tanishcqmehta@gmail.com'>
									<span>tanishcqmehta@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/tanishcq'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/tanishcq-m-63122417a/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>

					<div className='landcard'>
						<div className='card-content'>
							<div className='card-imgbox'>
								<img src={AbhishekSPic} alt='user' />
							</div>
							<div className='card-contentbox'>
								<h3>Abhishek Sachdeva</h3>
								<a href='mailto:sachdevaabu30@gmail.com'>
									<span>sachdevaabu30@gmail.com</span>
								</a>
							</div>
						</div>
						<ul className='sci'>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/Abhishek312s'
								>
									<i className='fab fa-github'></i>
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.linkedin.com/in/abhishek-sachdeva-877758202/'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div> */}
				{/* </div> */}
			{/* </section> */} 

			{/* <div className='landing-footer-wrapper'>
				<Footer />
			</div> */}
		</div>
	);
};

export default LandingPage;