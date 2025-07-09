import {
	BsBox,
	BsGithub,
	BsDuffle,
	BsCodeSlash,
	BsBoxes,
} from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import ScrollLeftContainer from './AnimatedContainers/ScrollLeftContainer';
import FadeInContainer from './AnimatedContainers/FadeInContainer';

export default function About() {
	return (
		<section id='about' className='relative'>
			<img
				src='/img/bg.png'
				alt='geometry-lines'
				crossOrigin='anonymous'
				loading='lazy'
				className='absolute inset-0 -z-10 h-full w-full object-cover opacity-1'
			/>
			<div className='mx-auto grid max-w-lg grid-cols-1 px-8 py-15 md:max-w-[65rem] md:grid-cols-[150px_3fr] md:gap-12 md:px-13 lg:mx-10 lg:max-w-6xl lg:grid-cols-[200px_3fr] xl:mx-auto xl:max-w-[75rem] xl:py-20 2xl:mx-auto 2xl:mt-35 2xl:max-w-[93rem] 2xl:items-center 2xl:justify-center 2xl:py-35'>
				<ScrollLeftContainer className='md:border-r-secondary/20 hidden md:mx-auto md:flex md:w-full md:flex-col md:items-start md:justify-center md:gap-25 md:border-r md:px-5 xl:gap-38'>
					<div className='flex flex-col items-center justify-center'>
						<BsCodeSlash className='text-tertiary h-10 w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14' />
						<h2 className='text-secondary text-[2rem] 2xl:text-[2.5rem]'>
							Front-End
						</h2>
						<h2 className='text-secondary -mt-3 text-xl 2xl:text-2xl'>
							Development
						</h2>
					</div>

					<div className='flex flex-col items-center justify-center'>
						<BsBoxes className='text-tertiary h-10 w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14' />
						<h2 className='text-secondary text-[2rem] 2xl:text-[2.5rem]'>
							Back-End
						</h2>
						<h2 className='text-secondary -mt-3 text-xl 2xl:text-2xl'>
							Development
						</h2>
					</div>

					<div className='flex flex-col items-center justify-center'>
						<MdOutlineDesignServices className='text-tertiary h-10 w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14' />
						<h2 className='text-secondary text-[2rem] 2xl:text-[2.5rem]'>
							Back-End
						</h2>
						<h2 className='text-secondary -mt-3 text-xl 2xl:text-2xl'>
							Development
						</h2>
					</div>
				</ScrollLeftContainer>

				{/* About Me */}
				<FadeInContainer
					delay={0.3}
					className='text-secondary flex flex-col items-start justify-start md:pr-10 lg:pr-0 lg:pl-5'
				>
					<h2 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl'>
						About Me
					</h2>

					<p className='font-alumni sm:text-md mt-3 max-w-md text-lg tracking-wide sm:mt-4 md:mt-3 md:max-w-[41rem] md:text-[18px] lg:max-w-[60rem] lg:text-[20px] xl:max-w-[49rem] xl:text-[20px] 2xl:max-w-[62rem] 2xl:text-[22px]'>
						I started my software development journey, driven by curiosity and a
						passion for building things that make a difference. Over the years,
						I have gained experience working with various technologies, focusing
						on creating intuitive and efficient web applications. My goal is to
						continuously learn, grow, and contribute to impactful projects.
					</p>

					<div className='border-tertiary bg-tertiary mt-5 rounded-lg border p-3 sm:mt-10 md:mt-7 md:max-w-2xl lg:max-w-4xl xl:max-w-3xl 2xl:mt-10 2xl:max-w-5xl'>
						<h2 className='text-3xl sm:text-4xl xl:text-[2.7rem] 2xl:text-[3rem]'>
							My Current Focus
						</h2>
						<p className='font-alumni mt-2 text-lg sm:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px]'>
							Currently, I am focused on expanding my expertise across the full
							development stack while maintaining my core drive to build
							applications that create meaningful impact. I'm deepening my
							knowledge in modern frameworks and cloud technologies, with
							particular emphasis on scalable architectures and user-centered
							design. My focus remains on continuous learning and contributing
							to projects that solve real-world problems through intuitive,
							efficient solutions.
						</p>
					</div>

					<div className='mt-8 hidden md:flex md:flex-col xl:mt-6 2xl:mt-10'>
						<h2 className='text-secondary text-[2.5rem] lg:text-[2.5rem] xl:text-[2.7rem] 2xl:text-[3rem]'>
							The Journey So Far
						</h2>

						<div className='mt-3 flex flex-row gap-15 xl:mt-5 2xl:mt-5 2xl:gap-20'>
							<div className='flex flex-col'>
								<div className='flex flex-row items-center justify-center gap-2'>
									<BsBox className='text-tertiary mb-1 h-7 w-7 2xl:h-10 2xl:w-10' />
									<h2 className='text-secondary text-5xl 2xl:text-6xl'>21</h2>
								</div>
								<h2 className='text-secondary border-b-tertiary border-b-1 text-[1.65rem] 2xl:text-[2.3rem]'>
									Tech Stacks
								</h2>
							</div>

							<div className='flex flex-col'>
								<div className='flex flex-row items-center justify-center gap-2'>
									<BsGithub className='text-tertiary sw-8 mb-1 h-7 w-7 2xl:h-10 2xl:w-10' />
									<h2 className='text-secondary text-5xl 2xl:text-6xl'>2</h2>
								</div>
								<h2 className='text-secondary border-b-tertiary border-b-1 text-[1.65rem] 2xl:text-[2.3rem]'>
									Projects
								</h2>
							</div>

							<div className='flex flex-col'>
								<div className='flex flex-row items-center justify-center gap-2'>
									<BsBox className='text-tertiary sw-8 mb-1 h-7 w-7 2xl:h-10 2xl:w-10' />
									<h2 className='text-secondary text-5xl 2xl:text-6xl'>1.4+</h2>
								</div>
								<h2 className='text-secondary border-b-tertiary w-24 border-b-1 text-[1.65rem] 2xl:w-34 2xl:text-[2.3rem]'>
									Experience
								</h2>
							</div>
						</div>
					</div>
				</FadeInContainer>

				{/* Expertise */}
				<FadeInContainer delay={0.3} className='flex flex-col md:hidden'>
					<h2 className='text-secondary mt-7 text-3xl sm:mt-10 sm:text-4xl'>
						Areas of Expertise
					</h2>
					<div className='mt-7 flex flex-row items-start justify-start gap-8 sm:gap-18'>
						<div className='flex flex-col items-center justify-center'>
							<BsCodeSlash className='text-tertiary mb-1 h-7 w-7 sm:h-9 sm:w-9' />
							<h2 className='text-secondary text-3xl sm:text-4xl'>FrontEnd</h2>
							<h2 className='text-secondary -mt-2 text-xl sm:text-2xl'>
								Development
							</h2>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<BsBoxes className='text-tertiary mb-1 h-7 w-7 sm:h-9 sm:w-9' />
							<h2 className='text-secondary text-3xl sm:text-4xl'>BackEnd</h2>
							<h2 className='text-secondary -mt-2 text-xl sm:text-2xl'>
								Development
							</h2>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<MdOutlineDesignServices className='text-tertiary mb-1 h-7 w-7 sm:h-9 sm:w-9' />
							<h2 className='text-secondary text-3xl sm:text-4xl'>UI/UX</h2>
							<h2 className='text-secondary -mt-2 text-xl sm:text-2xl'>
								Design
							</h2>
						</div>
					</div>
				</FadeInContainer>

				{/* Journey */}
				<FadeInContainer delay={0.3} className='flex flex-col md:hidden'>
					<h2 className='text-secondary mt-10 text-3xl sm:mt-12 sm:text-4xl'>
						The Journey So Far
					</h2>
					<div className='mt-7 flex flex-row items-start justify-start gap-10 sm:gap-16'>
						{/* Projects */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-2'>
								<BsBox className='text-tertiary mb-1 h-7 w-7 sm:h-8 sm:w-8' />
								<h2 className='text-secondary text-4xl sm:text-5xl'>21</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl sm:text-3xl'>
								Tech Stacks
							</h2>
						</div>

						{/* Techs */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-2'>
								<BsGithub className='text-tertiary mb-1 h-7 w-7 sm:h-8 sm:w-8' />
								<h2 className='text-secondary text-4xl sm:text-5xl'>2</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl sm:text-3xl'>
								Projects
							</h2>
						</div>

						{/* Projects */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-1'>
								<BsDuffle className='text-tertiary mb-1 h-7 w-7 sm:h-8 sm:w-8' />
								<h2 className='text-secondary text-4xl sm:text-5xl'>1.4+</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl sm:text-3xl'>
								Experience
							</h2>
						</div>
					</div>
				</FadeInContainer>
			</div>
		</section>
	);
}
