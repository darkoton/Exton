import React from 'react';

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.33334 6H14.6667M14.6667 6L9.66668 1M14.6667 6L9.66668 11"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowRight;
