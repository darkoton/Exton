import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Container({ className, children, style }: Props) {
  return (
    <div className={classNames('mx-auto px-[15px] md:px-[20px] max-w-[1170px] w-full', className)} style={style}>
      {children}
    </div>
  );
}

export default Container;
