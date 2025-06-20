interface CardProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Card = ({ variant = 'primary', children }: CardProps) => (
  <div className={`${styles.card} ${styles[variant]}`}>
    {children}
  </div>
);
import styles from './Card.module.scss';
import React from 'react';
export default Card;
export { Card, CardProps };
export type { CardProps } from './Card.types';
