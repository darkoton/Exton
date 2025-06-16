import React from 'react';
import classNames from 'classnames';

type PropsType<T = React.ReactNode> = {
	children: T;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
	ariaLabel?: string;
};

const Button: React.FC<PropsType> = ({ children, className, style, onClick, type = 'button', ariaLabel }) => {
	const onClickButton = React.useCallback(() => {
		onClick?.();
	}, [onClick]);

	return (
		<button
			className={classNames(
				className,

				// loading
				status === 'loading' && 'pointer-events-none opacity-50',

				// error
				'disabled:pointer-events-none disabled:opacity-50',
			)}
			style={style}
			onClick={onClickButton}
			type={type}
			disabled={status === 'error'}
			aria-label={ariaLabel}>
			{children}
		</button>
	);
};

export default Button;
