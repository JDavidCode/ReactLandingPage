import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div
			ref={ref}
			style={{
				transition: 'opacity 1s ease-in-out',
				opacity: inView ? 1 : 0,
			}}
		>
			{children}
		</div>
	);
};

export default FadeInSection;