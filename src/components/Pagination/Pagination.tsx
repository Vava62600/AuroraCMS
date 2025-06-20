import React from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? styles.active : ''}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;