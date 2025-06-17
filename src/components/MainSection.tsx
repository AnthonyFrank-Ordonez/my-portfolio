interface MainSectionProps {
	children: React.ReactNode;
}

export default function MainSection({ children }: MainSectionProps) {
	return (
		<main className='grid grid-cols-1 md:grid-cols-12'>
			<div className='col-span-1 md:col-span-12'>{children}</div>
		</main>
	);
}
