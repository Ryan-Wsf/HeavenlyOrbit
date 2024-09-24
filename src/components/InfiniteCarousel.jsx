import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const InfiniteCarousel = ( datas ) => {
    console.log(datas.datas.destinations);
    return (
        <section className="section2 max_width1440">
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
                  {datas.datas.destinations.map((item) => (
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

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import carouselData from '/Back.json';

// const InfiniteCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { destinations } = carouselData;

//   const moveCarousel = useCallback((direction) => {
//     setCurrentIndex((prevIndex) => {
//       let newIndex = prevIndex + direction;
//       if (newIndex < 0) newIndex = destinations.length - 1;
//       if (newIndex >= destinations.length) newIndex = 0;
//       return newIndex;
//     });
//   }, [destinations.length]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'ArrowLeft') moveCarousel(-1);
//       if (event.key === 'ArrowRight') moveCarousel(1);
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [moveCarousel]);

//   const getVisibleItems = () => {
//     const items = [];
//     for (let i = -1; i <= 1; i++) {
//       let index = (currentIndex + i + destinations.length) % destinations.length;
//       items.push(destinations[index]);
//     }
//     return items;
//   };

//   return (
//     <section className="section2 max_width1440">
//       <h2>Explorez l'Univers : Choisissez une Destination</h2>
//       <div className="div_section2">
//         <button 
//           onClick={() => moveCarousel(-1)} 
//           className="carousel-button carousel-button-left"
//           aria-label="Précédent"
//         >
//           <ChevronLeft size={30} />
//         </button>
//         <div className="flex transition-transform duration-300 ease-in-out" style={{
//           transform: `translateX(-${(currentIndex) * (100 / 3)}%)`
//         }}>
//           {getVisibleItems().map((item) => (
//             <Link to="#" key={item.id} className={item.class}>
//               <article className="article-carousel">
//                 <h3>{item.name}</h3>
//                 <img className="img-carousel" src={item.image} alt={item.name} />
//               </article>
//             </Link>
//           ))}
//         </div>
//         <button 
//           onClick={() => moveCarousel(1)} 
//           className="carousel-button carousel-button-right"
//           aria-label="Suivant"
//         >
//           <ChevronRight size={30} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default InfiniteCarousel;