import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

import Stat from "./Stat";

export default function StatsCarousel(){
    return(
        <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            navigation
        >
            <SwiperSlide>
                <Stat 
                    number={"150"}
                    text={"Perros a nuestro Cuidado"}
                    image={"stats_1"}
                    alt={"a crowd of happy dogs"}
                >
                </Stat>
            </SwiperSlide>

            <SwiperSlide>
                <Stat 
                    number={"168"}
                    text={"Costales de croquetas al mes"}
                    image={"stats_2"}
                    alt={"they eat a lot"}
                >
                </Stat>
            </SwiperSlide>

            <SwiperSlide>
                <Stat 
                    number={"$16,000MXN"}
                    text={"En gastos veterinarios por mes"}

                    image={"stats_3"}
                    alt={"sometimes they get sick"}
                >
                </Stat>
            </SwiperSlide>

            <SwiperSlide>
                <Stat 
                    number={"30"}
                    text={"Perros dados en adopción"}

                    image={"stats_4"}
                    alt={"they will be a happpy family"}
                >
                </Stat>
            </SwiperSlide>
        </Swiper>
    )
    
}