import './projectCard.css';

function ProjectCard({ title, github, demo, description, tools, alt, image }) {
	return (
		<div className='projectCard'>
			<img src={image} alt={alt} className='image' />
			<div className='project-info'>
				<h1 className='project-info__title'>{title}</h1>
				<p className='project-info__text'>{description}</p>

				<div className='project-info__button-container'>
					{demo && (
						<a
							href={demo}
							target='_blank'
							rel='noopener noreferrer'
							className='project-info__button demo-button'>
							Demo
						</a>
					)}

					{github && (
						<a
							href={github}
							target='_blank'
							rel='noopener noreferrer'
							className='project-info__button github-button'>
							GitHub
						</a>
					)}
				</div>

				<div className='project-info__tools'>
					{tools.map((tool, index) => (
						<div key={index} className='skill-item'>
							<i
								className={`${tool.icon} project_tools skill-icon`}></i>
							<p className='project_tools-name skill-name'>
								{tool.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
