import React from "react";

const PortfolioProjects = ({ projects }) => {
  return (
    <section id="projects-anchor" style={{ minHeight: "1240px" }}>
      <div className="mb-5">
        <h1 className="text-grey text-center">Featured Projects</h1>
        <p
          className="text-grey text-center pl-3 pr-3"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          While maintaining a strong presence in our home province of British
          Columbia, we take pride in successfully completing projects across
          Canada.
        </p>
      </div>

      <div className="project-container content d-flex flex-wrap">
        {projects.map(
          ({
            id,
            title,
            project: {
              projectContent,
              projectImage: { srcSet },
            },
          }) => (
            <div className="project-wrapper" key={id}>
              <div className="text-content text-center">
                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                <p dangerouslySetInnerHTML={{ __html: projectContent }}></p>
              </div>
              <img srcSet={srcSet} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects;
