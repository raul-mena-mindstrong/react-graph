import React from 'react';
import {
  Chip,
  makeStyles
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RelateItems from './RelateItems';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '300px'
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

const Item = ({repo}) => {
  /**
   * get information form graph endpoint
   */
  const {
    node: {
      name,
      url,
      createdAt,
      owner: {
        login
      },
      stargazers: { // required on the document
        totalCount: totalStarCount
      }
    }
  } = repo;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  /**
   * show or hide issues
   */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={`${classes.root} ${expanded ? classes.selected : ''}`}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Chip label={totalStarCount} avatar={<StarIcon/>} className={classes.chip}/>
        }
        title={name}
        subheader={login}
      />
      <CardContent>
        {url}<br /><br />
        {new Date(createdAt).toDateString()}
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <RelateItems repoName={name} />
        </CardContent>
      </Collapse>
    </Card>
  )
};

export default Item;
