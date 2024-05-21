import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SeventhPage() {
    return (
        <section class="container-tm" id="community">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination,  A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>

                            <div class="slide swiper-slide">
                                <img src="/gym_images/img7.jpg" alt="" class="image" />
                                <p>What truly sets this gym apart is their expert team of trainers. The trainers are
                                    knowledgeable, approachable, and genuinely invested in helping members achieve their fitness
                                    goals. They take the time to understand individual needs and create personalized workout
                                    plans, ensuring maximum results and safety.</p>

                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name"> Dan White</span>
                                    <span class="job"> Footballer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="slide swiper-slide">
                                <img src="/gym_images/img1.jpg" alt="" class="image" />
                                <p>Love the gym website! Easy navigation, awesome workouts, and the personalized tracker keep me
                                    on track. Quick and helpful customer support too. Thanks for making fitness so accessible!
                                </p>
                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name">Marnie Lotter</span>
                                    <span class="job">Web Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="slide swiper-slide">
                                <img src="/gym_images/img5.jpg" alt="" class="image" />
                                <p>Awesome gym site! User-friendly, varied workouts, and a personal tracker keep me engaged.
                                    Superb customer support. Thanks for making fitness enjoyable and stress-free. Highly
                                    recommend!</p>

                                <i class="bx bxs-quote-alt-left quote-icon"></i>

                                <div class="details">
                                    <span class="name">Emily Smith</span>
                                    <span class="job">Model</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    );
}