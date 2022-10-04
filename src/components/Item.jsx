import React from 'react';
import {
  Chip,
  makeStyles
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '300px',
    cursor: 'pointer'
  },
  selected: {
    width: '100% !important'
  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  chip: {
    marginLeft: '0.5rem'
  }
});

const Item = ({repo, onClick}) => {
  /**
   * get information form graph endpoint
   */
  const {
    name,
    stargazers: { // required on the document
      totalCount: totalStarCount
    }
  } = repo;
  const classes = useStyles();

  return (
    <Card className={`${classes.root}`} onClick={() => onClick(name)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]?.toUpperCase()}
          </Avatar>
        }
        action={
          <Chip label={totalStarCount} avatar={<StarIcon/>} className={classes.chip}/>
        }
        title={name}
      />
      <CardContent>
      </CardContent>
    </Card>
  )
};

export default Item;
