import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Box,
  Grid
} from '@mui/material'

export function Welcome() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Container maxWidth='xl'>
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
      <Container maxWidth='xl' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', backgroundColor: 'blueviolet', padding: '1rem'}}>
        <Grid container spacing={2} minWidth={'100%'}>
          {
            mockData.map(data => <SearchResults title={data.title} abstract={data.abstract} summary={data.Summary} />)
          }
        </Grid>
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
    <Grid size={{xs: 12, md: 6, lg: 4}}>
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: 'lightgray',
        minWidth: '100%'
      }}
    >
      <h2>{title}</h2>
      <h4>{abstract}</h4>
      <h4>{summary}</h4>
    </Box>
    </Grid>
  )
}

function HandleSearch(query: string) {
  // call the search API
  console.log(query)
}


const mockData = [
  {
    title: 'Title 1',
    abstract: 'Abstract 1',
    Summary: 'Summary 1'
  },
    {
    title: 'Title 2',
    abstract: 'Abstract 2',
    Summary: 'Summary 2'
  },
    {
    title: 'Title 3',
    abstract: 'Abstract 3',
    Summary: 'Summary 3'
  },
    {
    title: 'Title 4',
    abstract: 'Abstract 4',
    Summary: 'Summary 4'
  },
    {
    title: 'Title 5',
    abstract: 'Abstract 5',
    Summary: 'Summary 5'
  },
    {
    title: 'Title 6',
    abstract: 'Abstract 6',
    Summary: 'Summary 6'
  },
    {
    title: 'Title 7',
    abstract: 'Abstract 7',
    Summary: 'Summary 7'
  },
    {
    title: 'Title 8',
    abstract: 'Abstract 8',
    Summary: 'Summary 8'
  },
    {
    title: 'Title 9',
    abstract: 'Abstract 9',
    Summary: 'Summary 9'
  },
     {
    title: 'Title 10',
    abstract: 'Abstract 10',
    Summary: 'Summary 10'
  },
]