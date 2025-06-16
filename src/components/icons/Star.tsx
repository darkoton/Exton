import React from 'react';

const Star: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4 6.30416L1.83677 7.5L2.25 4.96718L0.5 3.1736L2.91839 2.80434L4 0.5L5.08161 2.80434L7.5 3.1736L5.75 4.96718L6.16323 7.5L4 6.30416Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Star;
