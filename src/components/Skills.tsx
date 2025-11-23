import { useState } from 'react';
import FadeInContainer from './AnimatedContainers/FadeInContainer';

export default function Skills() {
	const [activeFilter, setActiveFilter] = useState('All');
	const imgIcons = [
		{ img: '/img/react.png', name: 'React', category: 'Front-End' },
		{ img: '/img/vue.png', name: 'Vue', category: 'Front-End' },
		{ img: '/img/angular.png', name: 'Angular', category: 'Front-End' },
		{ img: '/img/tanstack.png', name: 'Tanstack', category: 'Front-End' },
		{ img: '/img/typescript.png', name: 'TypeScript', category: 'Front-End' },
		{ img: '/img/javascript.png', name: 'Javascript', category: 'Front-End' },
		{ img: '/img/fabricjs.png', name: 'Fabric JS', category: 'Front-End' },
		{ img: '/img/tailwind.png', name: 'Tailwind Css', category: 'Front-End' },
		{ img: '/img/html5.png', name: 'HTML', category: 'Front-End' },
		{ img: '/img/css.png', name: 'CSS', category: 'Front-End' },
		{ img: '/img/playwright.png', name: 'Playwright', category: 'Front-End' },
		{ img: '/img/vitest.png', name: 'Vitest', category: 'Front-End' },
		{ img: '/img/python.png', name: 'Python', category: 'Front-End' },
		{ img: '/img/express-js.png', name: 'Express', category: 'Back-End' },
		{ img: '/img/asp-net.png', name: 'ASP.NET', category: 'Back-End' },
		{ img: '/img/nest.png', name: 'NestJs', category: 'Back-End' },
		{ img: '/img/node-js.png', name: 'NodeJs', category: 'Back-End' },
		{ img: '/img/mongoDB.png', name: 'Mongodb', category: 'Back-End' },
		{ img: '/img/mongoose.png', name: 'Mongoose', category: 'Back-End' },
		{ img: '/img/postgresql.png', name: 'Postgresql', category: 'Back-End' },
		{ img: '/img/sqlite.png', name: 'SQLite', category: 'Back-End' },
		{ img: '/img/prismaorm.png', name: 'Prisma', category: 'Back-End' },
		{ img: '/img/coolify.png', name: 'Coolify', category: 'Tools' },
		{ img: '/img/git.png', name: 'Git', category: 'Tools' },
		{ img: '/img/uikit.png', name: 'UIKit', category: 'Front-End' },
		{ img: '/img/docker.png', name: 'Docker', category: 'Tools' },
		{ img: '/img/postman.png', name: 'Postman', category: 'Tools' },
		{ img: '/img/insomnia.png', name: 'Insomnia', category: 'Tools' },
	];
	const filters = ['All', 'Front-End', 'Back-End', 'Tools'];

	const filteredIcons =
		activeFilter === 'All'
			? imgIcons
			: imgIcons.filter((icon) => icon.category === activeFilter);

	return (
		<section id='skills' className='relative'>
			<img
				src='/img/bg.png'
				alt='geometry-lines'
				crossOrigin='anonymous'
				loading='lazy'
				className='absolute inset-0 -z-10 h-full w-full object-cover opacity-1'
			/>

			<FadeInContainer className='mx-auto max-w-lg px-8 py-8 md:mx-10 md:max-w-[60rem] md:py-18 lg:mx-20 lg:max-w-[70rem] xl:mx-auto xl:max-w-[70rem] 2xl:max-w-[88rem]'>
				<h2 className='text-secondary text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl'>
					Technologies and Tools
				</h2>

				<div className='mt-6 flex flex-wrap justify-start gap-3 sm:mt-8'>
					{filters.map((filter) => (
						<button
							key={filter}
							onClick={() => setActiveFilter(filter)}
							className={`relative transform rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 md:text-base ${
								activeFilter === filter
									? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/25'
									: 'text-secondary bg-gray-500/10 hover:bg-gray-500/20'
							} before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10`}
						>
							<span>{filter}</span>
						</button>
					))}
				</div>

				<div className='mt-5 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-8 md:grid-cols-5 md:gap-x-3 lg:grid-cols-6 2xl:mt-13'>
					{filteredIcons.map((images, idx) => (
						<div
							key={`${images.name}-${activeFilter}`}
							className='group animate-fadeInUp flex flex-col items-center justify-center gap-3 rounded-lg bg-gray-500/10 px-5 py-7 transition-all duration-300 hover:bg-gray-500/20 md:py-10 xl:py-12'
							style={{
								animationDelay: `${idx * 50}ms`,
								animationFillMode: 'both',
							}}
						>
							<img
								src={images.img}
								alt={images.name}
								className='h-12 w-12 grayscale filter transition-all duration-300 group-hover:grayscale-0 md:h-14 md:w-14 xl:h-16 xl:w-16 2xl:h-18 2xl:w-18'
							/>
							<h2 className='text-secondary mt-2 text-center grayscale filter transition-all duration-300 group-hover:grayscale-0 md:text-xl 2xl:text-2xl'>
								{images.name}
							</h2>
						</div>
					))}
				</div>
			</FadeInContainer>

			<style>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fadeInUp {
					animation: fadeInUp 0.6s ease-out;
				}
			`}</style>
		</section>
	);
}
