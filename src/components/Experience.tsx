import { useScroll, useSpring, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 0.8', 'end 0.2'],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

	const experienceData = [
		{
			company: 'QStrike Innovations Phils OPC',
			position: 'Associate Software Engineer',
			duration: 'July 2024 - Present',
			description:
				'Design, develop, maintain, and contribute to the stability and feature development of Front-End, Ancillary, and R&D projects. Collaborate with cross-functional teams to enhance system functionality, debug and resolve issues, and ensure long-term sustainability through refactoring, optimization, and adherence to industry coding standards.',
			bulletPoints: [
				'Design, developed and maintain scalable, maintanable code using latest technologies, such as React, Vue, TypeScript, NestJs, and Node.Js',
				'Built and design responsive web applications using UIKit, CSS and Vue, for our latest project name dyanmic logo drops',
				'Implemented dynamic text rendering of sport, team and mascot name using NestJs and FabricJs for Back-End and Vue for Front-End, allowing real-time content customization based on data inputs',
				'Contributed to the continuous improvement of our PDF-Service project and various ancillary and R&D projects by adhering to industry-standard coding practices, optimizing legacy code, and implementing new features to enhance performance and maintainability.',
				'Designed, maintained, and implemented new features for Vectorsoft and Prolook Design Studio Projects, leading to a improvement in load times and a reduction in redundant function calls and rendering operations.',
			],
		},
		{
			company: 'QStrike Innovations Phils OPC',
			position: 'Software Engineer Intern',
			duration: 'Mar 2024 - Jun 2024',
			description:
				'Contributed to the development, maintenance, and refactoring of legacy codebases, resolving various bugs and enhancing code quality, while gaining practical experience in Agile workflows and modern software engineering practices.',
			bulletPoints: [
				'Identified and resolved bugs in legacy web applications using Laravel, PHP, JavaScript, and Bootstrap, contributing to improved system reliability and maintainability',
				'Identified, refactor and fixed bugs in development and staging environments, improving system stability',
				'Participated in agile development processes and daily standups meetings',
				'Gained hands-on experience with Git, Jira and Agile Workflows',
			],
		},
	];

	return (
		<section id='experience'>
			<div className='mx-auto grid max-w-lg grid-cols-1 px-8 py-8 md:mx-10 md:max-w-[60rem] md:py-15 lg:mx-20 lg:max-w-[70rem] xl:mx-auto xl:max-w-[70rem] 2xl:max-w-[88rem]'>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-secondary mb-4 text-4xl sm:text-5xl xl:text-6xl'
				>
					Experience
				</motion.h2>

				<div ref={containerRef} className='relative pb-8'>
					{/* Background Line */}
					<div
						className='absolute left-[25px] w-0.5 bg-gray-600'
						style={{
							top: '48px',
							height: 'calc(100% - 88px)',
						}}
					></div>

					<motion.div
						className='absolute left-[25px] w-0.5 origin-top bg-gradient-to-b from-purple-500 to-purple-700'
						style={{
							height: lineHeight,
							top: '48px',
							maxHeight: 'calc(100% - 88px)',
						}}
					/>

					{experienceData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true, margin: '-50px' }}
							className={`mt-7 grid grid-cols-[50px_1fr] ${index !== experienceData.length - 1 ? 'pb-8' : ''}`}
						>
							{/* Icon */}
							<div className='flex items-start justify-center pt-1'>
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
									viewport={{ once: true }}
									className='relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 shadow-lg'
								>
									<FaBriefcase className='text-sm text-white' />
								</motion.div>
							</div>

							{/* Content */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
								viewport={{ once: true }}
								className='ml-4 flex flex-col justify-start'
							>
								<h3 className='text-secondary mb-1 text-xl font-bold tracking-widest sm:text-2xl lg:text-[1.45rem] xl:text-[1.5rem] 2xl:text-[1.55rem]'>
									{item.position}
								</h3>
								<h4 className='mb-2 text-lg font-semibold tracking-wide text-purple-400 sm:text-2xl lg:text-[1.45rem] 2xl:text-[1.55rem]'>
									{item.company}
								</h4>
								<p className='mb-3 text-sm text-gray-400 sm:text-lg lg:text-[1.3rem] 2xl:text-[1.35rem]'>
									{item.duration}
								</p>
								<p className='font-alumni mb-3 text-[1.2rem] leading-relaxed tracking-wide text-gray-300 sm:text-lg sm:text-[1.3rem] lg:text-[1.4rem] 2xl:text-[1.5rem]'>
									{item.description}
								</p>

								{/* Bullet Points */}
								{item.bulletPoints && item.bulletPoints.length > 0 && (
									<ul className='space-y-1 text-sm text-gray-300'>
										{item.bulletPoints.map((point, bulletIndex) => (
											<motion.li
												key={bulletIndex}
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{
													duration: 0.3,
													delay: index * 0.1 + 0.4 + bulletIndex * 0.1,
												}}
												viewport={{ once: true }}
												className='font-alumni flex items-start text-[1.1rem] tracking-wide sm:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem]'
											>
												<span className='mt-1 mr-2 flex-shrink-0 text-purple-400'>
													•
												</span>
												<span className='leading-relaxed'>{point}</span>
											</motion.li>
										))}
									</ul>
								)}
							</motion.div>
						</motion.div>
					))}

					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='mt-4 ml-[18px] flex justify-start'
					>
						<div className='relative z-10 h-4 w-4 rounded-full border-2 bg-purple-600 shadow-lg'></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
