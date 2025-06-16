import React from 'react';

const CaretRight: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.23716 4.78389L1.36938 1.03323C1.12804 0.799197 0.666657 0.94106 0.666657 1.2493L0.666656 8.75062C0.666656 9.05886 1.12804 9.20072 1.36938 8.96669L5.23716 5.21603C5.36538 5.09169 5.36538 4.90822 5.23716 4.78389Z"
				fill="currentColor"
				fillOpacity="0.3"
			/>
		</svg>
	);
};

export default CaretRight;
