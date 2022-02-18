// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";

const FrontPageHeroSlides = ({
  node: {
    homeHeroSlider: { homeHeroSlider },
  },
}) => {
//   console.log(homeHeroSlider);
  return (
    <section id="banner" className="banner">
      <div className="swiper-container">
        {homeHeroSlider ? (
          <Swiper
            //   spaceBetween={50}
            //   slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {homeHeroSlider.map(({ slideTitle, slideImage }, i) => (
              <SwiperSlide key={i}>
                <Row>
                  <Col
                    xs={12}
                    lg={6}
                    className="d-flex justify-content-end align-items-center order-2 order-lg-1"
                  >
                    <div className="text-content">
                      <h2 dangerouslySetInnerHTML={{ __html: slideTitle }}></h2>
                    </div>
                  </Col>
                  <Col xs={12} lg={6} className="banner order-1 order-lg-2">
                    <img srcSet={slideImage.srcSet} alt="" />
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FrontPageHeroSlides;
