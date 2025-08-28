import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'

type SearchResultsBoxes = {
  title: string;
  abstract: string;
  summary: string;
  score: number
}

const getScorePercentage = (score: number) => {
    if (score < 1) {
        const percentage = (score * 100).toFixed(2)
        return `${percentage}%`
    } else {
        return `${score}&`
    }
}

const SearchResultCard = ({title, abstract, summary, score}: SearchResultsBoxes) => {
    return (
    <Grid size={{xs: 12, md: 6, lg: 4}}>
        <Card variant='outlined' sx={{minWidth: '100'}}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Title
                </Typography>
                <Typography variant='h5' gutterBottom>
                    {title}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Section
                </Typography>
                <Typography gutterBottom variant='body2'>
                    {abstract}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Score
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {getScorePercentage(score)}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Excerpt
                </Typography>
                <Divider />
                <Typography variant='body1'>
                    {summary}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    )
}

export default SearchResultCard