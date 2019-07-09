import React from 'react'
import Category from './Category/Category'
import FilterSearch from './FilterSearch/FilterSearch'

export default function Categories() {
  return (
    <div className="container">
      <FilterSearch />
      <Category />
    </div>
  )
}
