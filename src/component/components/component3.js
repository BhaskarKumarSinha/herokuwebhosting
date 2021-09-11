import { Box, Typography } from "@material-ui/core"
import { makeYourSelf } from "../../constants/Data"


const Component3=()=>{
    return(
        <Box style={{marginLeft:"10%",marginTop:"5%"}}>
            <Typography variant ="h4"style={{
                            textAlign: 'center', fontWeight: 600, color: 'rgb(20, 43, 111)',
                            marginBottom: '24px', lineHeight: '1.375rem',marginRight:"15%"
                        }}>
                Make Your Self
            </Typography>
            <Typography  variant="h5"style={{
                            textAlign: 'center', fontWeight: 300, color: 'rgb(20, 43, 111)',
                            marginBottom: '24px',marginRight:"15%"
                        }}>Commit to yourself everyday with @Ritual</Typography>
            <Box>
                {
                    makeYourSelf.map(temp=>{
                        return(
                            <img style={{padding:15}} src={temp.url} alt="images"/>
                        )
                    })
                }
            </Box>
            </Box>
    )
}
export default Component3;