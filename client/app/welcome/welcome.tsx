import { useEffect, useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Box,
  Grid,
  Drawer,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material'
import { SearchService } from '~/services/search'
import SearchResultCard from '~/components/searchResultCard'

export function Welcome() {
  const [search, setSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const searchService = new SearchService()

  // useEffect(() => {
  //   setSearchResults(mockData)
  // }, [])

  async function HandleSearch(query: string) {
  // call the search API
  console.log(query)
  const hits = await searchService.submitQuery(query)
  setSearchResults(hits)
  
}

  return (
    <>
      {/** Start of facet search drawer */}
      <Drawer
        variant={'persistent'}
        anchor={'left'}
        open={drawerOpen}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          },
        }}
      >
        <Box
          sx={{
          }}
        >
          <h3>Filter by Title</h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label={'Title A (10)'} />
            <FormControlLabel control={<Checkbox />} label={'Title B (8)'} />
            <FormControlLabel control={<Checkbox />} label={'Title C (15)'} />
            <FormControlLabel control={<Checkbox />} label={'Title D (5)'} />
          </FormGroup>
        </Box>

        <Box
          sx={{
          }}
        >
          <h3>Filter by Author</h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label={'Author A (12)'} />
            <FormControlLabel control={<Checkbox />} label={'Author B (7)'} />
            <FormControlLabel control={<Checkbox />} label={'Author C (2)'} />
            <FormControlLabel control={<Checkbox />} label={'Author D (11)'} />
          </FormGroup>
        </Box>

        <Box
          sx={{
          }}
        >
          <h3>Filter by Source</h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label={'Source A (12)'} />
            <FormControlLabel control={<Checkbox />} label={'Source B (7)'} />
            <FormControlLabel control={<Checkbox />} label={'Source C (3)'} />
            <FormControlLabel control={<Checkbox />} label={'Source D (14)'} />
          </FormGroup>
        </Box>

        <Button
          onClick={() => setDrawerOpen(false)}
          variant='outlined'
        >
          Close
        </Button>        
      </Drawer>
      {/** End of facet search drawer */}

      <Button
        onClick={() => setDrawerOpen(true)}
        variant='outlined'
      >
        Open Filter
      </Button>
      <Container
        fixed={true}
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}
      >
        <TextField
          id='search'
          label={'Find documents'}
          variant='standard'
          onChange={event => setSearch(event.target.value)}
          sx={{
            width: '75%',
          }}
        />
        <Button
          onClick={() => HandleSearch(search)}
          variant='outlined'
          sx={{
            width: '15%',
            marginLeft: '1rem'
          }}
        >
          Search
        </Button>
      </Container>
      <Container maxWidth='xl' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', backgroundColor: '#BBB791', padding: '1rem'}}>
        <Grid container spacing={2} minWidth={'100%'}>
          {
            searchResults.map(data => <SearchResultCard title={data._source?.metadata?.title} abstract={data._source?.metadata?.section_name} summary={data._source?.content} score={data._score} key={data._source?.section_id} />)
          }
        </Grid>
      </Container>
    </>
  );
}

// type SearchResultsBoxes = {
//   title: string;
//   abstract: string;
//   summary: string;
// }

// function SearchResults({ title, abstract, summary }: SearchResultsBoxes) {
//   return (
//     <Grid size={{xs: 12, md: 6, lg: 4}}>
//     <Box
//       component={'section'}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         textAlign: 'center',
//         backgroundColor: 'lightgray',
//         minWidth: '100%',
//         alignItems: 'center'
//       }}
//     >
//       <h2>{title}</h2>
//       <h4>{abstract}</h4>
//       <h4>{summary}</h4>
//       <Button
//         variant='outlined'
//         sx={{
//           width: '75%',
//           margin: '0.5rem'
//         }}
//       >
//         View Document
//       </Button>
//     </Box>
//     </Grid>
//   )
// }