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
					<h2 className='text-secondary mt-7 text-3xl'>Areas of Expertise</h2>
					<div className='mt-7 flex flex-row items-start justify-start gap-8'>
						<div className='flex flex-col items-center justify-center'>
							<BsCodeSlash size={28} className='text-tertiary mb-1' />
							<h2 className='text-secondary text-3xl'>FrontEnd</h2>
							<h2 className='text-secondary -mt-2 text-xl'>Development</h2>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<BsBoxes size={28} className='text-tertiary mb-1' />
							<h2 className='text-secondary text-3xl'>BackEnd</h2>
							<h2 className='text-secondary -mt-2 text-xl'>Development</h2>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<MdOutlineDesignServices
								size={28}
								className='text-tertiary mb-1'
							/>
							<h2 className='text-secondary text-3xl'>UI/UX</h2>
							<h2 className='text-secondary -mt-2 text-xl'>Design</h2>
						</div>
					</div>
				</div>

				<div className='flex flex-col'>
					<h2 className='text-secondary mt-10 text-3xl'>The Journey So Far</h2>
					<div className='mt-7 flex flex-row items-start justify-start gap-10'>
						{/* Projects */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-2'>
								<BsBox size={24} className='text-tertiary mb-1' />
								<h2 className='text-secondary text-4xl'>8</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl'>
								Tech Stacks
							</h2>
						</div>

						{/* Techs */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-2'>
								<BsGithub size={23} className='text-tertiary mb-1' />
								<h2 className='text-secondary text-4xl'>2</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl'>
								Projects
							</h2>
						</div>

						{/* Projects */}
						<div className='flex flex-col items-center justify-center'>
							<div className='flex flex-row items-center justify-center gap-1'>
								<BsDuffle size={24} className='text-tertiary mb-1' />
								<h2 className='text-secondary text-4xl'>1.3+</h2>
							</div>
							<h2 className='text-secondary border-b-tertiary border-b-1 text-xl'>
								Experience
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
