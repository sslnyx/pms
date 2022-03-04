// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FrontPageHeroSlides = ({ homeHeroSlider }) => {
  //   console.log(homeHeroSlider);
  return (
    <section id="banner" className="banner">
      <div className="swiper-container">
        {homeHeroSlider ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ disableOnInteraction: false }}
            pagination={{ clickable: true }}
            //   spaceBetween={50}
            //   slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {homeHeroSlider.map(
              ({ slideTitle, slideImage, learnMore, slideContent }, i) => (
                <SwiperSlide key={i}>
                  <Row>
                    <Col
                      xs={12}
                      lg={6}
                      className="d-flex justify-content-end align-items-center order-2 order-lg-1"
                    >
                      <div className="text-content">
                        <h2
                          dangerouslySetInnerHTML={{ __html: slideTitle }}
                        ></h2>
                        <p
                          dangerouslySetInnerHTML={{ __html: slideContent }}
                        ></p>

                        <Link className="btn-learnmore" to={learnMore.url}>
                          {learnMore.title}
                        </Link>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} className="banner order-1 order-lg-2">
                      <img srcSet={slideImage.srcSet} alt="" />
                    </Col>
                  </Row>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FrontPageHeroSlides;
