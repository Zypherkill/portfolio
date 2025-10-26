import './skillwheel.css';

const skills = [
	{ icon: 'devicon-figma-plain colored', name: 'Figma' },
	{ icon: 'devicon-git-plain colored', name: 'Git' },
	{ icon: 'devicon-html5-plain colored', name: 'HTML' },
	{ icon: 'devicon-css3-plain colored', name: 'CSS' },
	{ icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
	{ icon: 'devicon-react-original colored', name: 'React' },
	{ icon: 'devicon-nodejs-plain-wordmark colored', name: 'NodeJS' },
	{ icon: 'devicon-express-original colored', name: 'Express' },
	{ icon: 'devicon-swagger-plain colored', name: 'Swagger' },
	{ icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
	{ icon: 'devicon-amazonwebservices-plain-wordmark colored', name: 'Aws' },
];

const SkillSection = () => {
	return (
		<section className='skill-section'>
			<h2 className='title'>FÄRDIGHETER</h2>
			{skills.map((skill, index) => (
				<div key={index} className='skill-item'>
					<i className={`${skill.icon} skill-icon`}></i>
					<p className='skill-name'>{skill.name}</p>
				</div>
			))}
		</section>
	);
};

export default SkillSection;
