import React from 'react';
import styles from './Text.module.scss';

type TextVariant = 'primary' | 'secondary' | 'disabled';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const Text = ({ variant = 'primary', children, className = '' }: TextProps) => {
  return (
    <p className={`${styles.text} ${styles[variant]} ${className}`.trim()}>
      {children}
    </p>
  );
};

export default Text;
export { Text, TextVariant, TextProps };