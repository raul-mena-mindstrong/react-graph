import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  List,
  Typography,
  makeStyles,
  ListItem,
  ListItemText,
  Chip
} from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { SEARCH_QUERY } from '../graph/queries';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const RelateItems = ({repoName}) => {
  const classes = useStyles();
  /**
   * execute query to get topicts related 
   */

  const {data, loading, error} = useQuery(
    SEARCH_QUERY,
    {
      variables: {
        name: repoName,
        limit: 25
      }
    }
  );


  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
      >
        There are no relate topicts!
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant={'h5'}>Topics related: </Typography>
      <List>
        {data.search.edges.map(({
          node: {
            name,
            stargazers: { // required on the document
              totalCount: totalStarCount
            }
          }
        }, index) => (
          <ListItem key={`${index}-${name}`}>
            <ListItemText>
              {name} &nbsp;&nbsp;
              <Chip label={totalStarCount} avatar={<StarIcon/>}/>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RelateItems;
