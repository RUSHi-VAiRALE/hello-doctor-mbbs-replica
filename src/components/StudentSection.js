import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const StudentSection = () => {
  const testimonials = [
    {
      name: 'Tathagat Awatar',
      rank: 'NEET 2024 AIR 1',
      testimonial: 'My name is Tathagat Awatar. I secured All India Rank 1 by scoring full score in NEET UG 2024. I started my preparation with Physics Wallah in 12th grade by joining the Lakshya NEET batch, then I took 2 drops by joining Yakeen NEET batch and I completed my full preparation from the online PW batch. PW teachers and their guidance helped me achieve AIR 1 and motivated me during my drop year....',
      image: 'http://placehold.co/600x250',
    },
    {
      name: 'Anmol Rathore',
      rank: 'UPSC CSE 2023 AIR 7',
      testimonial: 'The videos and classes on Physics Wallah helped me secure AIR 7 in UPSC CSE 2023. I truly recommend this platform for comprehensive preparation.',
      image: 'https://placehold.co/50',
    },
    {
      name: 'Raja Majhi',
      rank: 'GATE 2024 AIR 1',
      testimonial: 'I am thrilled to share that I secured AIR 1 in GATE 2024. Physics Wallah\'s structured curriculum and in-depth explanations made a big difference!',
      image: 'https://placehold.co/50',
    },
    {
      name: 'Amit Kumar Mandal',
      rank: 'IBPS Topper',
      testimonial: 'Physics Wallah helped me establish the basics of every subject and allowed me to progress quickly while maintaining accuracy. It was a game-changer!',
      image: 'https://placehold.co/50',
    },
    {
      name: 'Jane Doe',
      rank: 'NEET 2023 AIR 10',
      testimonial: 'Physics Wallah gave me confidence and structured my learning to crack my exam. I owe my success to their excellent teaching!',
      image: 'https://placehold.co/50',
    },
  ];

  return (
    <section className="testimonials py-5 bg-[#e7edff]">
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl">Students ❤️ CLATians</h2>
          <p className="text-muted">Hear from our students</p>
        </div>

        {/* Full-width Feature Card */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-lg w-full flex flex-col md:flex-row overflow-hidden">
              <img src={testimonials[0].image} className="w-full md:w-1/2" alt="Main Testimonial" />
              <div className="p-6 flex flex-col justify-between">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    <img src="images/comma.webp" alt="quote" className="inline" />
                    <br /><br />
                    {testimonials[0].testimonial}
                  </p>
                </div>
                <div className="testimonial-user text-center">
                  <p className="font-bold mb-0">{testimonials[0].name}</p>
                  <p className="small text-secondary">{testimonials[0].rank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <Swiper
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.slice(1).map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded h-full flex flex-col">
                <div className="testimonial-content flex-grow">
                  <p className="testimonial-text">
                    {testimonial.testimonial}
                  </p>
                </div>
                <div className="testimonial-user text-center">
                  <img src={testimonial.image} alt="User" className="testimonial-img w-12 h-12 rounded-full mx-auto" />
                  <p className="font-bold mb-0">{testimonial.name}</p>
                  <p className="small text-secondary">{testimonial.rank}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentSection; 