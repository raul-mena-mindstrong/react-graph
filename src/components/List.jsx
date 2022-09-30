import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Typography,
  makeStyles,
  CircularProgress
} from '@material-ui/core';
import { useDebounce } from 'use-debounce';
import { SEARCH_QUERY } from '../graph/queries';
import Repository from './Item';

const useStyles = makeStyles({
  note: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const List = ({searchTerm}) => {
  const classes = useStyles();
  /**
   * define debounce to avout a lot request to api
   */
  const [debouncedSearchTerm] = useDebounce(searchTerm, 200);
  /**
   * execute query to get repos
   */
  const {data, loading, error} = useQuery(
    SEARCH_QUERY,
    {
      variables: {
        name: debouncedSearchTerm,
        limit: 20
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
  /**
   * error case
   */
  if (error) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }
  /**
   * result nor found case
   */
  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
      >
        There are no results for this query!
      </Typography>
    )
  }

  return (
    <div className={classes.container}>
      {data.search.edges.map((repo, i) => (
        <Repository
          repo={repo}
          key={i}
        />
      ))}
    </div>
  );
};

export default List;
