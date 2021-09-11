
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar=()=>{
    const classes=useStyles();
    return(
<AppBar position="sticky" 
          color="inherit"
          style={{position:'fixed', top: 0 , left : 0,  margin: 0,display:'flex',paddingLeft:20}}
>
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Menu
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Ritual
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Who We Are
    </Typography>
  </Toolbar>
</AppBar>)
}
 export default NavBar;