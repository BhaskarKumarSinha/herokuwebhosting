import Carousel from "react-multi-carousel"
import {Box, Typography} from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import {imagesSliderList} from "../../constants/Data";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
const Slide3=()=>{
    return(
            <Box style={{display:"flex",margin:30}}>
                <Box style={{width:"100%"}}>
                <Carousel 
                  swipeable={false}
                  draggable={false}
                  responsive={responsive}
                  ssr={true} 
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="transform 400ms cubic-bezier(0.4, 0, 0.6, 1) 0s"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  focusOnSelect={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px">
                      {
                        imagesSliderList.map(temp=>{
                          return(
                            <Box style={{display:'flex',flexDirection:"Column",width:300,height:"100%",marginLeft:"50px"}}>
                              <img  style={{width:"100%",height:"100%"}} src={temp.url} alt="images" />
                                <Typography variant="h5" style={{ fontWeight: 100, color: 'rgb(20,43,111)' ,marginBottom:0}}>{temp.description}</Typography>
                         </Box>
                          )
                        })
                      }
                </Carousel>
                </Box>
            </Box>
    )
}
export default Slide3;