export default function Skills() {
	const imgIcons = [
		{ img: '/img/react.png', name: 'React' },
		{ img: '/img/vue.png', name: 'Vue' },
		{ img: '/img/tanstack.png', name: 'Tanstack' },
		{ img: '/img/typescript.png', name: 'TypeScript' },
		{ img: '/img/javascript.png', name: 'Javascript' },
		{ img: '/img/python.png', name: 'Python' },
		{ img: '/img/fabricjs.png', name: 'Fabric JS' },
		{ img: '/img/express-js.png', name: 'Express' },
		{ img: '/img/nest.png', name: 'NestJs' },
		{ img: '/img/node-js.png', name: 'NodeJs' },
		{ img: '/img/mongoDB.png', name: 'Mongodb' },
		{ img: '/img/postgresql.png', name: 'Postgresql' },
		{ img: '/img/prismaorm.png', name: 'Prisma' },
		{ img: '/img/coolify.png', name: 'Coolify' },
		{ img: '/img/git.png', name: 'Git' },
		{ img: '/img/tailwind.png', name: 'Tailwind Css' },
		{ img: '/img/uikit.png', name: 'UIKit' },
		{ img: '/img/html5.png', name: 'HTML' },
		{ img: '/img/css.png', name: 'CSS' },
	];

	return (
		<section id='skills'>
			<div className='mx-auto max-w-lg px-8 py-8 md:mx-10 md:max-w-[60rem] lg:mx-20 lg:max-w-[70rem] xl:mx-auto xl:max-w-[70rem] 2xl:mt-35 2xl:max-w-[80rem]'>
				<h2 className='text-secondary text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl'>
					Skills
				</h2>
				<div className='mt-5 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-8 md:grid-cols-5 md:gap-x-3 lg:grid-cols-6 2xl:mt-13'>
					{imgIcons.map((images) => (
						<div
							key={images.name}
							className='flex flex-col items-center justify-center gap-3 rounded-lg bg-gray-500/10 px-5 py-7 md:py-10 xl:py-12'
						>
							<img
								src={images.img}
								alt={images.name}
								className='h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16 2xl:h-18 2xl:w-18'
							/>
							<h2 className='text-secondary mt-2 text-center md:text-xl 2xl:text-2xl'>
								{images.name}
							</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
