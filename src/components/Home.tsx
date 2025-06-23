import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<section id='home' className='relative'>
			<img
				src='/img/bg.png'
				alt='geometry-lines'
				crossOrigin='anonymous'
				loading='lazy'
				className='absolute inset-0 -z-10 h-full w-full object-cover opacity-1'
			/>

			<div className='mx-auto grid grid-cols-1 px-8 py-10 sm:px-18 sm:py-12 md:grid-cols-2 md:py-39 lg:px-25 lg:py-35 xl:mx-auto xl:max-w-7xl xl:py-55 2xl:max-w-[98rem] 2xl:py-25'>
				<div className='mx-auto flex flex-col items-start md:justify-start lg:mt-25 xl:-mt-8 2xl:mt-35'>
					<h2 className='text-secondary bg-tertiary py-0.2 sm:text-lg:text-2xl mb-3 flex items-center rounded-xs px-2 text-lg shadow-lg 2xl:text-2xl'>
						Hi, My name is
					</h2>
					<h2 className='text-secondary text-4xl sm:mt-2 sm:text-5xl md:text-[2.7rem] lg:mt-1 lg:text-[3.7rem] xl:text-[3.9rem] 2xl:text-[4.8rem]'>
						Anthony Frank Ordoñez
					</h2>
					<p className='font-alumni mt-1.5 max-w-md text-left text-[1rem] text-white sm:mt-3 sm:text-[1.1rem] md:text-[1rem] lg:mt-2 lg:max-w-lg 2xl:max-w-[40rem] 2xl:text-[1.2rem]'>
						Tony for short, I am a Software Engineer specializing in Front-End
						Development, with hands-on experience in Back-End Development as
						well. Currently, I am focused on expanding my portfolio by creating
						personal projects that showcase my skills in building responsive,
						user-friendly web applicationss.
					</p>

					<div className='text-secondary mt-4 flex flex-row gap-3'>
						<a href='https://github.com/AnthonyFrank-Ordonez'>
							<FaGithubSquare className='md: h-6 w-6' />
						</a>

						<a href='https://www.linkedin.com/in/anthony-frank-ordo%C3%B1ez-96b0a02a9/'>
							<FaLinkedin className='md: h-6 w-6' />
						</a>

						<a href='https://www.instagram.com/ordonezanthonyfrank/'>
							<FaInstagramSquare className='md: h-6 w-6' />
						</a>
					</div>

					<button className='bg-tertiary mt-4 h-8 w-46 cursor-pointer rounded-lg text-white sm:mt-6 sm:h-10 sm:w-54 sm:text-lg lg:w-60 lg:text-lg 2xl:h-12 2xl:w-64 2xl:text-xl'>
						Download Resume
					</button>
				</div>

				<div className='flex items-center justify-center md:mt-[-4.5rem] md:items-end md:justify-end lg:-mt-19 xl:-mt-52 2xl:-mt-12'>
					<div className='relative mt-7 inline-block md:max-w-xl'>
						<div className='bg-tertiary absolute bottom-0 left-1/2 h-8/12 w-3/4 -translate-x-1/2 rounded-t-lg'></div>
						<img
							src='/img/me-1.png'
							alt='me'
							className='relative z-10 h-auto max-h-[33rem] w-auto md:max-h-[28rem] lg:max-h-[30rem] 2xl:max-h-[35rem]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
