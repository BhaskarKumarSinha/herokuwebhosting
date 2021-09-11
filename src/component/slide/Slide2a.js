import { Box, Typography } from "@material-ui/core"
import { imageHoverList } from "../../constants/Data";


const Slide2a = () => {
    return (
        <Box style={{marginTop:"30px"}}>
            <Box>
                <Typography variant="h4" style={{textAlign:"center",color: 'rgb(20, 43, 111)',fontWeight: 100,}}>
                    Featured Products
                </Typography>

            </Box>
            <Box style={{ width: 100, height: "100%", display: "flex", marginLeft: "10%" }}>
                {
                    imageHoverList.map(temp => {
                        return (
                            <Box style={{ padding: 10 }}>
                                <img src={temp.url} alt="images" />
                                <Typography style={{
                                    textAlign: 'left', fontWeight: 300, color: 'rgb(20, 43, 111)',
                                    marginBottom: '24px',fontStyle:"italic"
                                }}> {temp.subtitle}</Typography>
                                <Typography style={{
                                    textAlign: 'left', fontWeight: 400, color: 'rgb(20, 43, 111)',
                                    marginBottom: '24px',padding:0
                                }}>{temp.title}</Typography>
                                <Typography style={{
                                    textAlign: 'left', fontWeight: 500, color: 'rgb(20, 43, 111)',
                                    marginBottom: '24px', 
                                }}>{temp.description}</Typography>
                            </Box>
                        )
                    })
                }

            </Box>

        </Box>
    )
}
export default Slide2a;