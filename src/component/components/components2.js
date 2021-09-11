import { Box,Typography } from "@material-ui/core";


  

  const Components2=()=>{
return(
    <Box>
         <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',marginTop:"50px" }}>
                    <Box>
                        <img src="/images/Home-Feat-03.jpg" style={{ height: '452px', width: '452' }} alt="images" />
                    </Box>
                    <Box>
                        <Typography variant="h3" style={{
                            textAlign: 'left', fontWeight: 500, color: 'rgb(20, 43, 111)', letterSpacing: '-1.4px',
                            marginBottom: '24px', lineHeight: '3.375rem'
                        }}>
                    Clean and simple, delivered
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: 'left', fontWeight: 300, color: 'rgb(20, 43, 111)' }} >
                        Easy-to-start. Easy-to-cancel. Our team of scientists and<br/> nutritional experts are on a mission to turn your new healthy<br/> habit into a Ritual
                        </Typography>
                        <ul style={{listStyle:'none',display:'flex',flexDirection:"column",marginTop:"20px",textAlign: 'left', fontWeight: 300, color: 'rgb(20, 43, 111)',fontSize:"1.125rem",fontStyle:"Dutch801",lineHeight:"1.175rem"}}>
                        <li>Free shipping</li>
                        <li>Control your delivery date</li>
                        <li>Free and easy cancellation</li>
                        <li>30-day money back guarantee</li>
                        </ul>
                    </Box>
                </Box>
    </Box>
)
  }
  export default Components2;