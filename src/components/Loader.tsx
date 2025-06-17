import { Bouncy } from 'ldrs/react';
import 'ldrs/react/Bouncy.css';

export default function Loader() {
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-3'>
			<Bouncy size='60' speed='2.25' color='white' />
			<span className='text-lg text-white'>loading</span>
		</div>
	);
}
