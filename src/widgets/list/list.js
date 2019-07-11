import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import CheckCircle from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList(props) {
  const classes = useStyles();
  
  const Response =props.Result;
  const Correct = Response.reduce((total,item)=>{
    
    if(item.response){  
      return total +1}

      return total;

  },0)
  const Total = Response.length;
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Your Score with Response
          </Typography>
          <div className={classes.demo}>
            <List >
              {Response.map((item,index)=>(
                <ListItem key ={index}>
                  <ListItemText
                    primary={item.question}
                    secondary={`Correct Answer: ${item.correct_answer}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete">
                     { item.response?<CheckCircle style={{color:'green'}} />:< Close style={{color:'red'}}/>
                     }
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
          <Typography variant="h6" className={classes.title}>
            {`Your have score ${Correct} out of ${Total}`} 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}