import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Box
} from '@mui/material'

export function Welcome() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Container fixed={true}>
        <TextField
          id='search'
          label={'Find documents'}
          variant='standard'
          onChange={event => setSearch(event.target.value)}
        />
        <Button
          onClick={() => HandleSearch(search)}
          variant='outlined'
        >
          Search
        </Button>
        <h4 style={{ fontSize: '16px', color: 'red' }}>{search ? search : 'no search yet'}</h4>
      </Container>
      <Container fixed={true} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'blueviolet' }}>
        {
          mockData.map(data => <SearchResults title={data.title} abstract={data.abstract} summary={data.Summary} />)
        }
      </Container>
    </>
  );
}

type SearchResultsBoxes = {
  title: string;
  abstract: string;
  summary: string;
}

function SearchResults({ title, abstract, summary }: SearchResultsBoxes) {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: 'lightgray',
        margin: '1rem',
        width: '25%'
      }}
    >
      <h2>{title}</h2>
      <h4>{abstract}</h4>
      <h4>{summary}</h4>
    </Box>
  )
}

function HandleSearch(query: string) {
  // call the search API
}


const mockData = [
  {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
]