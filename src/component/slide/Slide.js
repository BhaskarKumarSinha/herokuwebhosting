import { Box, Typography } from "@material-ui/core";



const Slide1 = () => {
    // paddingLeft:150,paddingRight:150
    return (
        <Box style={{ display: 'flex', justifyContent:"center" ,paddingTop:"55px"}}>
            <Box style={{ display: 'flex', flexDirection: 'column', padding: '0px 20px ',backgroundColor: "rgba(242, 241, 245, 0.56)" }}>
                <Box>
                    <img style={{ width: 220, height: 110,pointer:"cursor","&:hover":{transition:"all 2s ease",transform:"scale(1.5)"}}} src="/images/Category-Multivitamin.jpg" alt="MultiVitamin" />
                </Box>
                <Box>
                    <Typography style={{
                        fontSize: '1.125rem', lineHeight: '1.5rem', padding: '12px 0px', fontFamily: "LL Circular",
                        color: 'rgb(20, 43, 111)',fontWeight:300,letterSpacing:0,textAlign:"center"
                    }}>
                        Shop Multivitamin
                    </Typography>
                </Box>
            </Box>
            <Box style={{display:'flex',flexDirection:'column', padding: '0px 20px ',backgroundColor: "rgba(242, 241, 245, 0.56)" }}>
                <Box>
                    <img onMouseOver="this.style.transition='scale(2.5)'" style={{ width: 220, height: 110, }} src="/images/Category-Protein__1_.jpg" alt="MultiVitamin" />
                </Box>
                <Box>
                    <Typography style={{
                        fontSize: '1.125rem', lineHeight: '1.5rem', padding: '12px 0px', fontFamily: "LL Circular",
                        color: 'rgb(20, 43, 111)',fontWeight:300,letterSpacing:0,textAlign:"center"
                    }}>
                        Shop Protein
                    </Typography>
                </Box>
            </Box>
            <Box style={{display:'flex',flexDirection:'column', padding: '0px 20px ',backgroundColor: "rgba(242, 241, 245, 0.56)"  }}>
                <Box>
                    <img style={{ width: 220, height: 110 }} src="/images/Category-Pregnancy__1_.jpg" alt="MultiVitamin" />
                </Box>
                <Box>
                    <Typography style={{
                        fontSize: '1.125rem', lineHeight: '1.5rem', padding: '12px 0px', fontFamily: "LL Circular",
                        color: 'rgb(20, 43, 111)',fontWeight:300,letterSpacing:0,textAlign:"center"
                    }}>
                        Shop Pregnancy
                    </Typography>
                </Box>
            </Box>
            <Box style={{display:'flex',flexDirection:'column', padding: '0px 20px ',backgroundColor: "rgba(242, 241, 245, 0.56)"  }}>
                <Box>
                    <img style={{ width: 220, height: 110 }} src="/images/Category-Bundles.jpg" alt="MultiVitamin" />
                </Box>
                <Box>
                    <Typography style={{
                        fontSize: '1.125rem', lineHeight: '1.5rem', padding: '12px 0px', fontFamily: "LL Circular",
                        color: 'rgb(20, 43, 111)',fontWeight:300,letterSpacing:0,textAlign:"center"
                    }}>
                        Shop Bundles
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Slide1;