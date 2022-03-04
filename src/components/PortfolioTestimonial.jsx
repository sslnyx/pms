import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PortfolioTestimonial = ({ portfolioTestimonial }) => {
  const { hash } = useLocation();
  const sectionTextimonial = useRef();
  useEffect(() => {
    if (hash)
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: sectionTextimonial.current.offsetTop,
          behavior: "smooth",
        });
      }, 200);
  }, []);

  //   console.log(portfolioTestimonial);
  return (
    <section
      id="textimonial-anchor"
      className="textimonial"
      ref={sectionTextimonial}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ background: "#f5f5f5" }}
      >
        {portfolioTestimonial.map(({ quote, author, image: { srcSet } }, i) => (
          <SwiperSlide key={i}>
            <Row className="content">
              <Col xs="12" md="6" className="quote">
                <div className="quote-wrapper">
                  <img className="quote-o" src="/img/logos/04_quote_open.svg" />
                  <p dangerouslySetInnerHTML={{ __html: quote }}></p>
                  <p>- {author}</p>
                  <img
                    className="quote-c"
                    src="/img/logos/04_quote_close.svg"
                  />
                </div>
              </Col>
              <Col xs="12" md="6" className="img-wrapper">
                <img srcSet={srcSet} />
              </Col>
            </Row>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" slot="pagination"></div>
      </Swiper>
    </section>
  );
};

export default PortfolioTestimonial;
