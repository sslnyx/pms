import React from "react";

const AboutMembers = ({ teams }) => {
  return (
    <section id="team" className="team d-flex flex-wrap content">
      {teams.map(
        ({
          node: {
            id,
            team: {
              content: { description, email, name, title },
              image: { srcSet },
            },
          },
        }) => (
          <div className="member-wrapper" key={id}>
            <img srcSet={srcSet} />
            <div className="title-wappre">
              {name}
              <br />
              <span className="title">{title}</span>
            </div>

            <div className="member-content">
              <h5>
                {name}
                <br />
                <span>{title}</span>
              </h5>
              <a href={`mailto:${email}`}>{email}</a>
              <p>{description}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default AboutMembers;
