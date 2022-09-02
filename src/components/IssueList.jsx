import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  List,
  Typography,
  makeStyles,
  ListItem,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import { GET_ISSUES } from '../graph/queries';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const IssueList = ({repoName, repoOwner}) => {
  const classes = useStyles();
  /**
   * execute query to get issues
   */
  const {data, loading, error} = useQuery(
    GET_ISSUES,
    {
      variables: {
        name: repoName,
        owner: repoOwner
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

  if (!data.repository.issues.nodes.length) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
      >
        There are no issues!
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant={'h5'}>Issues: </Typography>
      <List>
        {data.repository.issues.nodes.map(issue => (
          <ListItem>
            <ListItemText>{issue.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IssueList;
