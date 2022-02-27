import React from 'react'
import { SearchContextInterface } from '../types/context'

const defaultSearchContext: SearchContextInterface = {
  search: '',
  debouncedSearch: '',
  setSearch: () => {},
}

export const SearchContext = React.createContext<SearchContextInterface>(
  defaultSearchContext,
)
