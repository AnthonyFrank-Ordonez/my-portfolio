import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { FaBars, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();

		// Close menu first
		setMenuOpen(false);

		// Then scroll after a brief delay
		setTimeout(() => {
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	};

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
						className='fixed inset-0 z-50 bg-black md:hidden'
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='absolute top-6 right-6'>
							<button
								aria-label='close-menu'
								className='text-white transition-colors hover:text-gray-300'
								onClick={() => setMenuOpen(false)}
							>
								<IoMdClose className='h-8 w-8' />
							</button>
						</div>

						<div className='text-secondary flex h-full flex-col items-center justify-center px-8 text-lg'>
							<motion.div
								className='flex flex-col items-center space-y-12 text-center'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.1, duration: 0.4 }}
							>
								<div className='mb-8'>
									<h2 className='text-tertiary text-3xl font-bold tracking-wider'>
										TONY.DEV
									</h2>
								</div>

								<div className='text-secondary flex flex-col space-y-8'>
									<motion.a
										href='#home'
										aria-label='home'
										className='hover:text-tertiary text-3xl font-light transition-colors duration-300'
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2, duration: 0.3 }}
										onClick={(e) => handleNavClick(e, 'home')}
									>
										Home
									</motion.a>

									<motion.a
										aria-label='about'
										className='cursor-pointer text-3xl font-light transition-colors duration-300 hover:text-purple-400'
										onClick={(e) => {
											handleNavClick(e, 'about');
										}}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.3, duration: 0.3 }}
									>
										ABOUT
									</motion.a>

									<motion.a
										aria-label='skills'
										className='cursor-pointer text-3xl font-light transition-colors duration-300 hover:text-purple-400'
										onClick={(e) => {
											handleNavClick(e, 'skills');
										}}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.4, duration: 0.3 }}
									>
										SKILLS
									</motion.a>

									<motion.a
										aria-label='experience'
										className='cursor-pointer text-3xl font-light transition-colors duration-300 hover:text-purple-400'
										onClick={(e) => {
											handleNavClick(e, 'experience');
										}}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.5, duration: 0.3 }}
									>
										EXPERIENCE
									</motion.a>

									<motion.a
										aria-label='projects'
										className='cursor-pointer text-3xl font-light transition-colors duration-300 hover:text-purple-400'
										onClick={(e) => {
											handleNavClick(e, 'projects');
										}}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.6, duration: 0.3 }}
									>
										PROJECTS
									</motion.a>
								</div>

								<motion.div
									className='mt-3 flex space-x-6'
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.7, duration: 0.3 }}
								>
									<a href='https://github.com/AnthonyFrank-Ordonez'>
										<FaGithub className='text-tertiary h-8 w-8' />
									</a>

									<a href='https://www.linkedin.com/in/anthony-frank-ordo%C3%B1ez-96b0a02a9/'>
										<FaLinkedin className='text-tertiary h-8 w-8' />
									</a>

									<a href='https://www.instagram.com/ordonezanthonyfrank/'>
										<FaInstagram className='text-tertiary h-8 w-8' />
									</a>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
