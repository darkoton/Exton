import React, { ReactNode, HTMLAttributes } from 'react';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLBodyElement>;

const Body: React.FC<Props> = ({ children }) => {
  return <body>{children}</body>;
};

export default Body;
