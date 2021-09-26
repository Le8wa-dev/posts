import React from 'react'
import { usePagination } from '../../../hooks/usePagination';
import { getPagesArray } from '../../../utils/pages';

export const Pagination = ({ totalPages, page, changePage }) => {
  
  let pagesArray = usePagination(getPagesArray, totalPages);

  return (
    <div className='page__wrapper'>
      {
        pagesArray.length && pagesArray.map(p => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        ))
      }
    </div>
  )
}
