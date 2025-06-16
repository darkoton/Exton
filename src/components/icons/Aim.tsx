import React from 'react';

const Aim: React.FC<React.SVGProps<SVGSVGElement>> = props => {
	return (
		<svg {...props} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.5 5C0.5 7.48528 2.51472 9.5 5 9.5C7.48528 9.5 9.5 7.48528 9.5 5C9.5 2.51472 7.48528 0.5 5 0.5C2.51472 0.5 0.5 2.51472 0.5 5Z"
				stroke="currentColor"
			/>
			<path
				d="M2.42857 5C2.42857 6.42016 3.57984 7.57143 5 7.57143C6.42016 7.57143 7.57143 6.42016 7.57143 5C7.57143 3.57984 6.42016 2.42857 5 2.42857C3.57984 2.42857 2.42857 3.57984 2.42857 5Z"
				stroke="currentColor"
			/>
			<path
				d="M4.35714 5C4.35714 5.35504 4.64496 5.64286 5 5.64286C5.35504 5.64286 5.64286 5.35504 5.64286 5C5.64286 4.64496 5.35504 4.35714 5 4.35714C4.64496 4.35714 4.35714 4.64496 4.35714 5Z"
				stroke="currentColor"
			/>
		</svg>
	);
};

export default Aim;
