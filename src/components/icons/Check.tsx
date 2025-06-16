import React from 'react';

const Check: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.5 3L3.5 5.5L7.5 0.5" stroke="currentColor" />
		</svg>
	);
};

export default Check;
