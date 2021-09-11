import { Box, Typography, TextField,List } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));


const Upfooter = () => {
    const classes = useStyles();
    return (
        <Box style={{ display: "flex", width: "80%", height: 300, alignItems: "center", justifyContent: "center", marginLeft: "30vh" }}>
            <Box style={{ width: '50%', display: "flex", textAlign: "left", alignItems: "center" }}>
                <Typography variant="h4" style={{ fontFamily: 'LL Circular,sans-serif', fontWeight: 500, display: 'block', textAlign: "left", color: 'rgb(20, 43, 111)' }}>
                    Subscribe for updates,<br /> exclusive promotions,<br /> and more.
                </Typography>
            </Box >
            <Box style={{ width: '50%', display: "flex", flexDirection: "Column", alignItems: "flex-start" }}>
                <Box >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Enter Your Email" />
                    </form>
                </Box>
                <Box>
                    <List>
                        <ul style={{ display: 'flex', listStyle: 'none',alignItems:"flex-start" }}>
                            <li style={{ padding: 10 }}><a href="#"><FacebookIcon /></a></li>
                            <li style={{ padding: 10 }}><a href="#"><InstagramIcon /></a></li>
                            <li style={{ padding: 10 }}><a href="#"><PinterestIcon /></a></li>
                            <li style={{ padding: 10 }}><a href="#"><TwitterIcon /></a></li>
                            <li style={{ padding: 10 }}><a href="#"><YouTubeIcon /></a></li>
                        </ul>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}
export default Upfooter;