import { useParallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";

const Hero = ({ heroSection: { image, subTitle, title } }) => {
  // console.log(props);
  const { ref } = useParallax({ speed: -20 });
  const parallaxController = useParallaxController();
  return (
    <>
      <section
        id="hero"
        className="hero text-center"
        style={{ overflow: "hidden" }}
      >
        <div className="title-container p-3" style={{ zIndex: 100 }}>
          <h1>{title}</h1>
          <p className="text-uppercase">{subTitle}</p>
        </div>
        {/* {JSON.stringify(image)} */}
        <img
          ref={ref}
          className="h-100 w-100"
          srcSet={image.srcSet}
          onLoad={() => parallaxController.update()}
        />
      </section>
    </>
  );
};

export default Hero;
