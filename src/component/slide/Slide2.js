import { Box, Card,CardContent,CardMedia,makeStyles,Typography } from "@material-ui/core";

const useStyles=makeStyles((theme)=>({
    media:{
        height: 0,
        // paddingTop: '56.25%'
    },

}))


const Slide2 =()=>{
    const classes=useStyles();
    return(
        <Box>
            <Card>
            <CardMedia
        className={classes.media}
        image="/images/PDP_EFM_Bottle.jpg"
        title="Paella dish"
      />
            </Card>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
        <Box style ={{display:'flex',marginLeft:"10%"}}>
        <Box className="card">
    <img src="/images/PDP_EFM_Bottle.jpg"
      alt= 'images'  />
    <Box className="card-content">
    </Box>
  </Box>
        <Box className="card">
    <img src="/images/PDP_EPRE_Bottle__1_.jpg"
      alt= 'images'  />
    <Box className="card-content">
    </Box>
  </Box>
        <Box className="card">
    <img src="/images/PDP_EPRE_Hand.jpg"
      alt= 'images'  />
    <Box className="card-content">
    </Box>
  </Box>
        <Box className="card">
    <img src="/images/PDP_EFM_Bottle.jpg"
      alt= 'images'  />
    <Box className="card-content">
    </Box>
  </Box>
        </Box>
        </Box>
    )
}
export default Slide2;