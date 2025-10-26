import projects from '../../data/projects';
import MobileProjectCard from '../MobileProjectCard/MobileProjectCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import './projects.css';

function Projects() {
	const mobileProjects = projects.filter((p) => p.type === 'mobile');
	const webProjects = projects.filter((p) => p.type === 'web');

	return (
		<div className='projects-section'>
			<h1 className='title'>PROJEKT</h1>
			<div className='mobile-project-container'>
				{mobileProjects.map((project, index) => (
					<MobileProjectCard key={index} {...project} />
				))}
			</div>
			<div className='projects-box'>
				{webProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
