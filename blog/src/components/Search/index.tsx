import algoliasearch from 'algoliasearch/lite'
import { createRef, default as React, useState } from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import { ThemeProvider } from 'styled-components'
import StyledSearchBox from './StyledSearchBox'
import StyledSearchResult from './StyledSearchResults'
import StyledSearchRoot from './StyledSearchRoot'
import useClickOutside from './useClickOutside'
const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888'
}
export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  )
  useClickOutside(rootRef, () => setFocus(false))
  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  )
}
