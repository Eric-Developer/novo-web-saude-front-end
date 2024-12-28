import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  classNameMobile?: string;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange,classNameMobile }: PaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className={`${"pagination"} ${classNameMobile}`}>
      <button
        className="prev"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </button>

      <button
        className={`page ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>

      {currentPage > 3 && <button className="dots">...</button>} 
      {currentPage > 2 && (
        <button
          className="page"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}

      {currentPage !== 1 && currentPage !== totalPages && (
        <button className="page active">{currentPage}</button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          className="page"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}

      {currentPage < totalPages - 2 && <button className="dots">...</button>} 
      <button
        className={`page ${currentPage === totalPages ? 'active' : ''}`}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </button>

      <button
        className="next"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
