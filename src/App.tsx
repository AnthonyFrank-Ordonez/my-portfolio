import { useState } from 'react';

import Header from './components/Header';
import Loader from './components/Loader';
import MainSection from './components/MainSection';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function App() {
	const [isLoading, setLoading] = useState(() => {
		const initialLoader = sessionStorage.getItem('loader');
		if (!initialLoader) {
			setTimeout(() => {
				setLoading(false);
				sessionStorage.setItem('loader', 'true');
			}, 2000);

			return true;
		}
		return false;
	});

	if (isLoading) return <Loader />;

	return (
		<>
			<Header />
			<MainSection>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
			</MainSection>
		</>
	);
}
