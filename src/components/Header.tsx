import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<motion.header
			className='w-full'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
		>
			<nav className='flex items-center justify-between px-8 py-5 lg:px-10 lg:py-5 xl:max-w-[95rem] xl:px-12 xl:py-5 2xl:mx-auto 2xl:max-w-[115rem] 2xl:px-20 2xl:py-7'>
				<div className='text-secondary flex items-center text-xl md:px-9 lg:px-10 xl:px-15 2xl:px-30 2xl:text-2xl'>
					<span>Tony.Dev</span>
				</div>

				<div className='text-secondary 2xl:max-w-auto hidden items-center space-x-8 px-12 text-lg md:flex 2xl:text-2xl'>
					<a
						href='#home'
						aria-label='home'
						className='hover:decoration-tertiary hover:underline'
					>
						Home
					</a>
					<a
						href='#about'
						aria-label='about'
						className='hover:decoration-tertiary hover:underline'
					>
						About
					</a>
					<a
						href='#skills'
						aria-label='skills'
						className='hover:decoration-tertiary hover:underline'
					>
						Skills
					</a>
					<a
						href='#experience'
						aria-label='experience'
						className='hover:decoration-tertiary hover:underline'
					>
						Experience
					</a>
					<a
						href='#projects'
						aria-label='projects'
						className='hover:decoration-tertiary hover:underline'
					>
						Projects
					</a>
				</div>

				<button
					aria-label='burger-icon'
					className='text-secondary flex items-center md:hidden'
					onClick={() => setMenuOpen(!isMenuOpen)}
				>
					<div className='relative'>
						<motion.div
							initial={false}
							animate={{
								opacity: isMenuOpen ? 0 : 1,
								rotate: isMenuOpen ? 45 : 0,
							}}
							transition={{ duration: 0.3 }}
							style={{
								position: isMenuOpen ? 'absolute' : 'relative',
								top: 0,
								left: 0,
							}}
						>
							<FaBars size={18} />
						</motion.div>

						<motion.div
							initial={false}
							animate={{
								opacity: isMenuOpen ? 1 : 0,
								rotate: isMenuOpen ? 0 : -45,
							}}
							transition={{ duration: 0.3 }}
							style={{
								position: isMenuOpen ? 'relative' : 'absolute',
								top: 0,
								left: 0,
							}}
						>
							<IoMdClose size={24} />
						</motion.div>
					</div>
				</button>
			</nav>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className='shadow-md md:hidden'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='text-secondary flex flex-col space-y-8 px-8 py-3 text-lg'>
							<a
								href='#home'
								aria-label='home'
								className='hover:decoration-tertiary hover:underline'
							>
								Home
							</a>
							<a
								href='#about'
								aria-label='about'
								className='hover:decoration-tertiary hover:underline'
							>
								About
							</a>
							<a
								href='#skills'
								aria-label='skills'
								className='hover:decoration-tertiary hover:underline'
							>
								Skills
							</a>
							<a
								href='#experience'
								aria-label='experience'
								className='hover:decoration-tertiary hover:underline'
							>
								Experience
							</a>
							<a
								href='#projects'
								aria-label='projects'
								className='hover:decoration-tertiary hover:underline'
							>
								Projects
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
