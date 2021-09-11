import { Box, Typography } from "@material-ui/core"

const Components1 = () => {
    return (
        <>
            <Box style={{ marginTop: 60 }}>
                <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box>
                        <img src="/images/home-feat-dyson.jpg" style={{ height: '452px', width: '452' }} alt="images" />
                    </Box>
                    <Box>
                        <Typography variant="h3" style={{
                            textAlign: 'left', fontWeight: 500, color: 'rgb(20, 43, 111)', letterSpacing: '-1.4px',
                            marginBottom: '24px', lineHeight: '3.375rem'
                        }}>
                            We're not about<br /> pseudoscience and <br />half-truths
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: 'left', fontWeight: 300, color: 'rgb(20, 43, 111)' }} >
                            From Omega-3 DHA from microalgae<br></br> to regeneratively-farmed pea protein, our scientists<br /> studied diets and genetics to make daily,<br /> essentials based on what we need.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box style={{ marginTop: 60, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >
                    <Box >
                        <Typography variant="h3" style={{
                            textAlign: 'left', fontWeight: 500, color: 'rgb(20, 43, 111)', letterSpacing: '-1.4px',
                            marginBottom: '24px', lineHeight: '3.375rem'
                        }}>
                            You deserve ,<br /> traceability
                        </Typography>
                        <Typography variant="h5" style={{ textAlign: 'left', fontWeight: 300, color: 'rgb(20, 43, 111)' }}>
                            We share our sources, studies, and suppliers — <br />daily essentials backed by the first visible supply<br /> chain of its kind.
                        </Typography>
                    </Box>
                    <Box>
                        <img src="/images/home-Map.jpg" style={{ height: '452px', width: '452' }} alt=""images/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Components1;