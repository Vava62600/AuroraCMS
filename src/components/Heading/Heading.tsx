import React from 'react';
import styles from './Heading.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ level = 'h1', children, className = '' }: HeadingProps) => {
  const Tag = level;
  return (
    <Tag className={`${styles.heading} ${styles[level]} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default Heading;
export { Heading, HeadingLevel, HeadingProps };
