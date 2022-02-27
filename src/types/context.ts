export interface SearchState {
    search: string
    debouncedSearch: string
  }
  
  export type SearchContextInterface = SearchState & {
    setSearch: (search: string) => void
  }