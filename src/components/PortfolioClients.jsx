import React from "react";

const PortfolioClients = ({ portfolioClients }) => {
  return (
    <section className="clients" style={{ minHeight: "332px" }}>
      <h2 className="text-grey text-center" style={{ marginTop: "100px" }}>
        Notable Clients
      </h2>
      <div className="content d-flex flex-wrap justify-content-center">
        {portfolioClients.map(({ sourceUrl, id }) => (
          <div className="clients-wrapper" key={id}>
            <img src={sourceUrl} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioClients;
