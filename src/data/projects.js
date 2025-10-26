import pokemongame from '../assets/pokemongame.jpg';
import movieDb from '../assets/movieDb.jpg';
import expressApi from '../assets/expressApi.png';
import PinIt from '../assets/PinIt.png';

export const projects = [
	{
		type: 'mobile',
		title: 'Where its @',
		demo: 'https://react-exam-skrg.vercel.app/',
		github: 'https://github.com/Zypherkill/where-its-at',
		tools: [
			{ icon: 'devicon-html5-plain colored', name: 'HTML' },
			{ icon: 'devicon-css3-plain colored', name: 'CSS' },
			{ icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
			{ icon: 'devicon-react-original colored', name: 'React' },
		],
		description:
			'En responsiv mobilapplikation byggt i react där användaren kan beställa biljetter till spelningar av olika band på ett snyggt och interaktivt sätt. Testa applikationen direkt genom att klicka dig igenom bilden.',
	},
	{
		type: 'web',
		title: 'Catch all Pokémons',
		demo: 'https://Zypherkill.github.io/Pokemon-spel/',
		github: 'https://github.com/Zypherkill/Pokemon-spel',
		tools: [
			{ icon: 'devicon-html5-plain colored', name: 'HTML' },
			{ icon: 'devicon-css3-plain colored', name: 'CSS' },
			{ icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
		],
		description:
			'Ett litet Pokémon-spel byggt med Vanilla JavaScript. Här är målet att fånga 10 Pokémon genom att hovera över dem med musen, när alla Pokémon är fångade avslutas spelet och tiden visas upp i en lista.',
		image: pokemongame,
		alt: 'Bild från mitt pokemon spel',
	},
	{
		type: 'web',
		title: 'My Movie Database',
		demo: 'https://zypherkill.github.io/My-Movie-Database/template/index.html',
		github: 'https://github.com/Zypherkill/My-Movie-Database',
		tools: [
			{ icon: 'devicon-html5-plain colored', name: 'HTML' },
			{ icon: 'devicon-css3-plain colored', name: 'CSS' },
			{ icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
		],
		description:
			'En responsiv filmdatabas byggt med Vanilla JavaScript som låter användare utforska, söka och favoritisera filmer. Tekniker från två olika api:er har använts här för att visa upp innehållet. ',
		image: movieDb,
		alt: 'Bild från min film databas',
	},
	{
		type: 'web',
		title: 'Rest API',
		github: 'https://github.com/Zypherkill/Backend-Exam',
		tools: [
			{ icon: 'devicon-nodejs-plain-wordmark colored', name: 'NodeJS' },
			{ icon: 'devicon-express-original colored', name: 'Express' },
			{ icon: 'devicon-mongodb-plain colored', name: 'MongoDB' },
			{ icon: 'devicon-swagger-plain colored', name: 'Swagger' },
		],
		description:
			'Ett REST API byggt med Node.js och Express, där MongoDB används för datalagring. API:et gör det möjligt för användare att registrera sig och logga in för att kunna lägga beställningar från ett kaffeutbud. Även skrivet med swagger-dokumentation för testning.',
		image: expressApi,
		alt: 'Bild insomnia med get-anrop',
	},
	{
		type: 'web',
		title: 'PinIt',
		demo: 'http://pinitapibucket.s3-website.eu-north-1.amazonaws.com/',
		github: 'https://github.com/Zypherkill/PinIt-Api',
		tools: [
			{ icon: 'devicon-html5-plain colored', name: 'HTML' },
			{ icon: 'devicon-css3-plain colored', name: 'CSS' },
			{ icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
			{ icon: 'devicon-react-original colored', name: 'React' },
			{
				icon: 'devicon-amazonwebservices-plain-wordmark colored',
				name: 'Aws',
			},
		],
		description:
			'En webapp där man kan registrera sig som användare, logga in och göra inlägg i form of post-it lappar på en anteckningstavla.',
		image: PinIt,
		alt: 'Bild på PinIt webapp',
	},
];

export default projects;
