import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const InfiniteCarousel = ( {datas} ) => {
    return (
        <section id="section2" className="max_width1440">
            <h2>Explorez l'Univers : Choisissez une Destination</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="div_section2">
                  {datas.map((item) => (
                    <SwiperSlide key={item.id}>
                        <article className="article-carousel">
                            <h3>{item.name}</h3>
                            <img className="img-carousel" src={item.image} alt={item.name} />
                        </article>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </section>
    );
    };
export default InfiniteCarousel;