import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import 'devicon/devicon.min.css';
import { useRef } from 'react';

function App() {
	const projectRef = useRef(null);
	const skillsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div className='app'>
			<Sidebar
				projects={projectRef}
				skills={skillsRef}
				about={aboutRef}
				contact={contactRef}
			/>
			<MainContent
				projectsRef={projectRef}
				skillsRef={skillsRef}
				aboutRef={aboutRef}
				contactRef={contactRef}
			/>
		</div>
	);
}

export default App;
