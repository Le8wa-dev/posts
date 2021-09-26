import {useMemo} from 'react'

export const usePagination = (callback, totalPages) => {
  return useMemo(() => {
    return callback(totalPages)
  }, [totalPages])
}