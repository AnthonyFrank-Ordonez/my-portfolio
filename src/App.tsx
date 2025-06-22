import { useEffect, useState } from 'react';

import Header from './components/Header';
import Loader from './components/Loader';
import MainSection from './components/MainSection';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function App() {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const initialLoader = sessionStorage.getItem('loader');

		if (!initialLoader) {
			setLoading(true);

			const timer = setTimeout(() => {
				setLoading(false);
				sessionStorage.setItem('loader', 'true');
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, []);

	if (isLoading) return <Loader />;

	return (
		<>
			<Header />
			<MainSection>
				<Home />
				<About />
				<Skills />
				<Experience />
			</MainSection>
		</>
	);
}
