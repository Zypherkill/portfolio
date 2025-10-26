import './navBar.css';

function NavBar({ projects, skills, about, contact }) {
	const scrollToSection = (ref) => {
		ref.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest', // 👈 hindrar horisontell scroll
		});
	};

	return (
		<nav className='navigation'>
			<ul>
				<li className='link' onClick={() => scrollToSection(projects)}>
					Projekt
				</li>
				<li className='link' onClick={() => scrollToSection(skills)}>
					Färdigheter
				</li>
				<li className='link' onClick={() => scrollToSection(about)}>
					Om
				</li>
				<li className='link' onClick={() => scrollToSection(contact)}>
					Kontakt
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
