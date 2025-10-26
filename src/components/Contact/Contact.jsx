import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'service_qn35kyi',
				'template_fpc0tix',
				formData,
				'H_dZlz2XSz1j6iFqb'
			)
			.then(
				(result) => {
					alert('Ditt meddelande har skickats!');
					setFormData({ name: '', email: '', message: '' });
				},
				(error) => {
					console.error('Fel vid skickning:', error.text);
					alert('Något gick fel, försök igen senare.');
				}
			);
	};

	return (
		<form className='contactForm' onSubmit={handleSubmit}>
			<h1 className='title'>KONTAKTA MIG</h1>

			<input
				className='contactForm__name'
				type='text'
				name='name'
				placeholder='Ditt namn'
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<input
				className='contactForm__email'
				type='email'
				name='email'
				placeholder='Din e-post'
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<textarea
				className='contactForm__message'
				name='message'
				placeholder='Ditt meddelande'
				value={formData.message}
				onChange={handleChange}
				required
			/>

			<button type='submit' className='contactForm__button'>
				Skicka
			</button>
		</form>
	);
}

export default ContactForm;
