import { ReactNode } from 'react';
import s from './Container.module.scss';
import { clsx } from 'clsx';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={clsx(s.container)}>{children}</div>;
};
