const Hero = ({ heroSection: { image, subTitle, title } }) => {
  // console.log(props);
  return (
    <section
      id="hero"
      className="hero text-center"
      style={{ overflow: "hidden" }}
    >
      <div className="title-container p-3" style={{ zIndex: 100 }}>
        <h1>{title}</h1>
        <p className="text-uppercase">{subTitle}</p>
      </div>
      <img srcSet={image.srcSet} />
    </section>
  );
};

export default Hero;
