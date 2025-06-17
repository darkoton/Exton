import React from 'react';
import classNames from 'classnames';

import { type TypeStatus } from '@interfaces/status.types';

import { LoadingIcon } from '@components/icons';

type PropsType<T = React.ReactNode> = {
	children: T;
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
	status?: TypeStatus;
	ariaLabel?: string;

	before?: T;
	after?: T;
};

const Button: React.FC<PropsType> = ({
	children,
	className,
	style,
	onClick,
	type = 'button',
	status = 'loaded',
	ariaLabel,
	before,
	after,
}) => {
	const onClickButton = React.useCallback(() => {
		onClick?.();
	}, [onClick]);

	return (
		<button
			className={classNames(
				'text-center text-white font-normal uppercase text-[12px] rounded-[12px] p-[17px_12px] bg-blue',

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
			{before && <span>{before}</span>}

			{status !== 'loading' ? children : <LoadingIcon />}

			{after && <span>{after}</span>}
		</button>
	);
};

export default Button;
