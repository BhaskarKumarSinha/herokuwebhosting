import { Box } from "@material-ui/core";
import { imagesSliderList } from "../../constants/Data";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const Slide4 = () => {
    return (
        <Box>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    imagesSliderList.map(temp => {
                        return (

                            <SwiperSlide>{temp.images}</SwiperSlide>
                        )
                    })
}
            </Swiper>
        </Box>
    )
}
export default Slide4;