
import { Box, makeStyles, Typography } from "@material-ui/core"
import MaximizeIcon from '@material-ui/icons/Maximize';

const useStyles = makeStyles((theme) => ({
  Home_hero:{
    backgroundImage:"url(/images/Home-Hero-Desktop.jpg)",
        width:'100%',
        height:"100%"

  },
  home_text:{
      display:'flex',
      alignItems:'center',
      flexDirection:"column",
      margin:"0px auto 16px"
  }
  }));

const Home=()=>{
    const classes=useStyles();
return(
        <Box className={classes.Home_hero} style={{width:'100vw',height:'78vh',padding:'0 20px'}} >
  <Box className={classes.home_text}>
      <Typography variant='h1' style={{fontFamily:'LL Circular,sans-serif',fontWeight:400,display:'block',color: 'rgb(20, 43, 111)',paddingTop:60,marginLeft:"20%"}}>
          The future 
      </Typography >
      <Typography variant='h1' style={{fontFamily:'LL Circular,sans-serif',fontWeight:400,display:'block',textAlign:"right",color: 'rgb(20, 43, 111)'}}>
          of health 
      </Typography >
      <Typography variant='h1' style={{fontFamily:'LL Circular,sans-serif',fontWeight:400,display:'block',textAlign:"left",color: 'rgb(20, 43, 111)'}}>
         <MaximizeIcon /> is clear
      </Typography>
  </Box>

    </Box>
)
}
export default Home;