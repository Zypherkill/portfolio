import './mainContent.css';
import ContactForm from '../Contact/Contact';
import About from '../About/About';
import SkillWheel from '../Skillwheel/SkillWheel';
import Projects from '../Projects/Projects';
import FadeInSection from '../FadeInSection/FadeInSection';

function MainContent({ projectsRef, skillsRef, aboutRef, contactRef }) {
	return (
		<aside className='mainContent'>
			<FadeInSection ref={projectsRef} direction='left'>
				<Projects />
			</FadeInSection>

			<FadeInSection ref={skillsRef} direction='left'>
				<SkillWheel />
			</FadeInSection>

			<FadeInSection ref={aboutRef} direction='left'>
				<About />
			</FadeInSection>

			<FadeInSection ref={contactRef} direction='left'>
				<ContactForm />
			</FadeInSection>
		</aside>
	);
}

export default MainContent;
