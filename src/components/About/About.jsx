import './about.css';
import {useRef} from 'react';

function About() {

	return (
		<div className='about'>
			<h1 className='title'>OM MIG</h1>
			<section  className='about-section'>
				<p className='about-section__text'>
					Jag är 29 år och bor i Kil, Värmland. Utanför studierna
					jobbar jag halvtid som tennistränare och tävlingsledare hos
					Kils Tennisklubb, där jag även själv är en engagerad
					spelare. Tennisen har gett mig både struktur och tålamod,
					och jag uppskattar verkligen balansen mellan träning,
					socialt engagemang och mina studier.
				</p>

				<p className='about-section__text'>
					Mitt intresse för IT väcktes för ungefär tio år sedan när
					jag byggde min första speldator. Genom att följa guider på
					YouTube lärde jag mig mycket om hårdvara och insåg hur
					roligt det var att förstå hur allt hänger ihop. Med tiden
					skapades mitt intresse användarupplevelse och
					design — något som framförallt växte fram genom mitt
					engagemang i datorspelet World of Warcraft. Jag fascinerades
					av gränssnitt, designval och hur små detaljer kunde påverka
					spelupplevelsen.
				</p>

				<p className='about-section__text'>
					Den resan har lett mig till frontendutveckling, där jag får
					kombinera mitt intresse för design med tekniska färdigheter.
					Det är just blandningen av kreativitet och problemlösning
					som gör att jag känner att jag verkligen har hittat rätt.
				</p>

				<p className='about'></p>
			</section>
		</div>
	);
}

export default About;
