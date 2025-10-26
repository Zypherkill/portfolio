import './Sidebar.css';
import NavBar from '../Navbar/NavBar';
import profileImage from '../../assets/pictureOfMe.jpg';

const socials = [
	{
		icon: 'devicon-twitter-original',
		url: 'https://twitter.com/zypherkill',
	},
	{
		icon: 'devicon-linkedin-plain',
		url: 'https://www.linkedin.com/in/hannes-b%C3%A4cklund-0b7932302/',
	},
	{
		icon: 'devicon-github-original',
		url: 'https://github.com/Zypherkill',
	},
];

const Sidebar = ({ projects, skills, about, contact }) => {
	return (
		<aside className='sidebar'>
			<NavBar
				projects={projects}
				skills={skills}
				about={about}
				contact={contact}
			/>
			<div className='sidebar__content'>
				<img
					src={profileImage}
					alt='Profile'
					className='sidebar__image'
				/>

				<h1 className='sidebar__name'>Hannes Bäcklund</h1>
				<p className='sidebar__tagline'>Frontend Utvecklare</p>
				<p className='sidebar__info'>
					Jag är en frontendutvecklare från Värmland med fokus på
					UX/UI. Jag brinner för att skapa moderna, snygga och
					användarvänliga webbsidor som förenklar och förbättrar
					människors digitala upplevelser.
				</p>

				<div className='sidebar__socials'>
					{socials.map((social, index) => (
						<a
							key={index}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'>
							<i
								className={`${social.icon} sidebar__social-icon`}></i>
						</a>
					))}
				</div>

				<button
					className='sidebar__button'
					onClick={() =>
						contact.current?.scrollIntoView({ behavior: 'smooth' })
					}>
					{' '}
					Kontakta mig
				</button>
				<a
					href={`${import.meta.env.BASE_URL}CV_Hannes.pdf`}
					download
					className='sidebar__button--2'>
					Ladda ned CV
				</a>
			</div>
		</aside>
	);
};

export default Sidebar;
