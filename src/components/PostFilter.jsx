import React from 'react'

import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировака"
        options={[
          { value: 'title', name: 'Сортировка по заголовку' },
          { value: 'body', name: 'Сортировка по описанию' }
        ]}
      />
    </div>
  )
}
