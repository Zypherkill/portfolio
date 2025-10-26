import './mobileProjectCard.css';

import { useState } from 'react';

function MobileProjectCard({ title, demo, github, tools, description }) {
	const [shake, setShake] = useState(false);

	const handleShake = () => {
		setShake(true);
		setTimeout(() => setShake(false), 400);
	};

	return (
		<div className='mobile-project'>
			<div className={`mobile-mockup ${shake ? 'shake' : ''}`}>
				<iframe
					src={demo}
					title={title}
					className='mobile-project-iframe'></iframe>
			</div>
			<div className='project-info mobile-info'>
				<h1 className='project-info__title'>{title}</h1>
				<p className='project-info__text'>{description}</p>

				<div className='project-info__button-container'>
					<a
						className='project-info__button demo-button'
						onClick={handleShake}>
						Demo
					</a>
						<a
							href={github}
							target='_blank'
							rel='noopener noreferrer'
							className='project-info__button github-button'>
							GitHub
						</a>
				</div>

				<div className='project-info__tools'>
					{tools.map((tool, index) => (
						<div key={index} className='skill-item'>
							<i className={`${tool.icon} project_tools skill-icon`}></i>
							<p className='skill-name'>{tool.name}</p>
						</div>
					))}
				</div>
			</div>

		</div>
	);
}



export default MobileProjectCard;
