import React from 'react';

const Lock: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 4H6M2 4C1.44772 4 1 4.44772 1 5V8C1 8.55228 1.44772 9 2 9H6C6.55228 9 7 8.55228 7 8V5C7 4.44772 6.55228 4 6 4M2 4V3C2 1.89543 2.89543 1 4 1C5.10457 1 6 1.89543 6 3V4"
				stroke="currentColor"
			/>
		</svg>
	);
};

export default Lock;
