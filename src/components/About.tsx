import {
	BsBox,
	BsGithub,
	BsDuffle,
	BsCodeSlash,
	BsBoxes,
} from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';

export default function About() {
	return (
		<section id='about'>
			<div className='mx-auto grid max-w-lg grid-cols-1 px-8 py-15'>
				<div className='text-secondary flex flex-col items-start justify-start'>
					<h2 className='text-4xl sm:text-5xl'>About Me</h2>
					<p className='font-saira sm:text-md mt-3 max-w-md text-sm sm:mt-4'>
						I started my software development journey, driven by curiosity and a
						passion for building things that make a difference. Over the years,
						I have gained experience working with various technologies, focusing
						on creating intuitive and efficient web applications. My goal is to
						continuously learn, grow, and contribute to impactful projects.
					</p>
				</div>

				<div className='flex flex-col'>
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
				</div>

				<div className='flex flex-col'>
					<h2 className='text-secondary mt-10 text-3xl sm:mt-12 sm:text-4xl'>
						The Journey So Far
					</h2>
					<div className='mt-7 flex flex-row items-start justify-start gap-10 sm:gap-16'>
						{/* Projects */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-2'>
								<BsBox className='text-tertiary mb-1 h-7 w-7 sm:h-8 sm:w-8' />
								<h2 className='text-secondary text-4xl sm:text-5xl'>8</h2>
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
								<h2 className='text-secondary text-4xl sm:text-5xl'>1.3+</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl sm:text-3xl'>
								Experience
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
