import { useAnimation, useInView, motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface ScrollLeftContainerProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
	style?: {
		clipPath: string;
	};
}

export default function ScrollLeftContainer({
	children,
	delay = 0,
	className = '',
	style = { clipPath: '' },
}: ScrollLeftContainerProps) {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={{
				hidden: { opacity: 0, x: -100 },
				visible: { opacity: 1, x: 0 },
			}}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
}
