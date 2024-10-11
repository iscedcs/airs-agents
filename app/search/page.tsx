import AdvancedSearch from '@/components/ui/advanced-search';
import React from 'react';

export default function SearchDriver() {
	return (
		<div className='max-w-[500px] p-2 mx-auto my-[100px]'>
			<AdvancedSearch
				placeholder='Search Vehicle Plate, Name, T-Code, Asin'
				variant='primary'
			/>
		</div>
	);
}
