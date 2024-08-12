import { Pagination } from 'antd';
import React from 'react';
import styles from "../styles/Paginator.module.css";

interface PaginatorProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  return (
    <div className={styles.paginator}>
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={pageSize}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Paginator;
