import { Box, Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((themes) => ({
    icon1: {
        display: "flex",
        flexDirection: "column"
    },
    Box: {
        display: "flex",
        marginLeft:40
    },
    common:{
        fontSize: '1.125rem', lineHeight: '1.5rem', padding: '12px 0px', fontFamily: "LL Circular",
                        color: 'rgb(20, 43, 111)',fontWeight:300,letterSpacing:0
    }
}))


const Icon1 = () => {

    const classes = useStyles();
    return (
        <Box className={classes.icon1} style={{marginTop:50}} >
            <Box className={classes.common} style={{fontWeight:"bold",textAlign:"center",fontSize:"2.5rem"}}>
               <Typography variant="h5"> Daily essentials with good intentions — for living life or creating it.</Typography> 
            </Box>
            <Box className={classes.Box}>
                {/* <Box>
                    <Box>
                        <img src="/images/Screenshot (6).png" alt="images" />
                    </Box>
                    <Box>
                        <Typography className={classes.common}>
                            Traceable <br/>
                            Ingredients
                        </Typography>
                        
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <img src="/images/Screenshot (7).png" alt="images" />
                    </Box>
                    <Box>
                        <Typography className={classes.common}>
                            Non-GMO
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <img src="/images/Screenshot (8).png" alt="images" />
                    </Box>
                    <Box>
                        <Typography className={classes.common}>
                            Third Party Tested
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <img src="/images/Screenshot (9).png" alt="images" />
                    </Box>
                    <Box>
                        <Typography className={classes.common}>
                            Vegan
                        </Typography>
                </Box>
                </Box>
                <Box>
                <Box>
                    <img src="/images/Screenshot (10).png" alt="images" />
                    </Box>
                    <Box>
                        <Typography className={classes.common}>
                            No Artificial
                             Flavors or 
                             Synthetic Filler
                        </Typography>
                    </Box>
                </Box> */}
                <img src="/images/icons.png" alt="icons" style={{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"20%"}}/>
                </Box>
            </Box>
            )
}
            export default Icon1;