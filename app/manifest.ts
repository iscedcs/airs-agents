import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Transpay',
		short_name: 'Transpay',
		description: 'Transpay',
		start_url: '/',
		display: 'fullscreen',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/logo2.png',
				sizes: 'any',
				type: 'image/png',
			},
		],
	};
}
