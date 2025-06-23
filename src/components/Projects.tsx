import { FaGithub, FaRocket } from 'react-icons/fa';

export default function Projects() {
	const projects = [
		{
			name: 'BookSyde E-Commerce',
			date: 'Feb 2025 - Apr 2025',
			image: '/img/booksyde.png',
			techStack: [
				'Tanstack Start',
				'Tanstack Query',
				'React',
				'Typescript',
				'Javascript',
				'Better-Auth',
				'Tailwind CSS',
				'Postgresql',
				'Prisma',
			],
			deployed: false,
			description:
				'Booksyde a modern e-commerce project for books, manga, and novels built with TanStack Start full-stack React framework, offering seamless book discovery and purchasing with optimized performance and responsive design.',
			url: '',
			githubUrl: 'https://github.com/AnthonyFrank-Ordonez/Booksyde-Ecommerce',
		},
		{
			name: 'Ortask',
			date: 'Jun 2025 - Present',
			image: '/img/ortask.png',
			techStack: [
				'React',
				'Express',
				'Typescript',
				'Javascript',
				'Tanstack Query',
				'Tailwind CSS',
				'Shadcn',
				'MongoDB',
				'Mongoose',
				'Redux',
			],
			deployed: false,
			description:
				'A React-based frontend application for displaying, managing, and organizing tasks. This application is built with React and Vite, allowing users to create, view, delete, and update their tasks accordingly such as their current status on their tasks.',
			url: '',
			githubUrl: 'https://github.com/AnthonyFrank-Ordonez/Ortask-Client-Side',
		},
	];

	return (
		<section id='projects'>
			<div className='mx-auto max-w-lg px-8 py-8 md:mx-10 md:max-w-[60rem] lg:mx-20 lg:max-w-[70rem] xl:mx-auto xl:max-w-[70rem] 2xl:max-w-[88rem]'>
				<h2 className='text-secondary mb-10 text-4xl sm:text-5xl xl:mb-20 xl:text-6xl'>
					Projects
				</h2>

				<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
					{projects.map((project) => (
						<div key={project.name} className='h-full w-auto bg-black/20'>
							<div className='relative overflow-hidden'>
								<img
									src={project.image}
									alt={project.image}
									className='object-fit h-auto w-full md:max-h-53 md:min-h-53 lg:max-h-60 lg:min-h-60 xl:max-h-65 xl:min-h-65 2xl:max-h-80 2xl:min-h-80'
								/>
							</div>

							<div className='p-3'>
								<div className='flex items-center justify-between'>
									<h2 className='text-secondary text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem]'>
										{project.name}
									</h2>

									<p
										className={`text-secondary ${!project.deployed ? 'bg-yellow-500' : 'bg-green-500'} rounded-lg px-2 py-0.5`}
									>
										{!project.deployed ? 'In Development' : 'Live'}
									</p>
								</div>
								<p className='mb-2 text-[0.9rem] text-gray-400 md:text-[1rem]'>
									{project.date}
								</p>
								<p className='text-secondary font-alumni mb-3 text-[15px] sm:text-[16px] md:text-[17px] 2xl:text-[19px]'>
									{project.description}
								</p>
								<div className='mb-5 flex flex-wrap gap-2'>
									{project.techStack.map((name, index) => (
										<p
											key={index}
											className='font-alumni text-secondary py-0.3 rounded-lg bg-white/10 px-4 text-[0.9rem] lg:text-[1.1rem]'
										>
											{name}
										</p>
									))}
								</div>

								<div className='text-secondary flex flex-col gap-3'>
									<a
										href={project.githubUrl}
										className='flex w-full items-center justify-center rounded-md bg-white transition-colors hover:bg-white/80'
									>
										<FaRocket className='text-primary -mt-0.9 2xl:-mt-0.9 -mr-2.5 h-3 w-3 2xl:h-4 2xl:w-5' />
										<span className='text-primary rounded px-4 py-2 2xl:text-[1.1rem]'>
											Live Demo
										</span>
									</a>

									<a
										href={project.githubUrl}
										className='flex w-full items-center justify-center rounded-md bg-gray-700 transition-colors hover:bg-gray-700/80'
									>
										<FaGithub className='text-secondary -mt-0.9 -mr-2.5 h-3 w-3 2xl:-mt-1 2xl:h-4 2xl:w-5' />
										<span className='text-secondary rounded px-4 py-2 2xl:text-[1.1rem]'>
											Source Code
										</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
