import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef } from 'react';

const FadeInSection = forwardRef(({ children, direction = 'right' }, ref) => {
	const localRef = useRef(null);
	const targetRef = ref || localRef;
	const isInView = useInView(targetRef, { margin: '-50px' });

	const xStart = direction === 'right' ? 100 : -100;

	return (
		<motion.div
			ref={targetRef}
			initial={{ opacity: 0, x: xStart }}
			animate={
				isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xStart }
			}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{children}
		</motion.div>
	);
});

export default FadeInSection;
