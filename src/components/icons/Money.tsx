import React from 'react';

const Money: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.25 6.1H8.21429V5.05M7.25 1.9H8.21429V2.95M2.75 1.9H1.78571V2.95M1.78571 5.05V6.1H2.75M5 5.4C4.28992 5.4 3.71429 4.7732 3.71429 4C3.71429 3.2268 4.28992 2.6 5 2.6C5.71008 2.6 6.28571 3.2268 6.28571 4C6.28571 4.7732 5.71008 5.4 5 5.4ZM1.14286 0.5H8.85714C9.21218 0.5 9.5 0.813401 9.5 1.2V6.8C9.5 7.1866 9.21218 7.5 8.85714 7.5H1.14286C0.787817 7.5 0.5 7.1866 0.5 6.8V1.2C0.5 0.813401 0.787817 0.5 1.14286 0.5Z"
				stroke="currentColor"
			/>
		</svg>
	);
};

export default Money;
