import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";

const MainMenu = ({ siteLogo, edges, setOpenMain }) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    anime({
      targets: itemsRef.current,
      translateY: ["100%", "0"],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: "easeOutQuint",
      duration: 1000,
    });
    return () => {};
  }, []);

  return (
    <div className="main-menu">
      <div className="close" aria-label="Close" onClick={() => setOpenMain(false)}></div>
      <Link to="/#">
        <img
          onClick={() => setOpenMain(false)}
          className="site-logo"
          src={siteLogo}
          alt="site-logo"
        />
      </Link>
      <div className="list-wrapper d-flex justify-content-center aling-items-center text-uppercase">
        <ul className="d-flex flex-column justify-content-center">
          {edges?.map(({ node }, i) =>
            node.slug !== "get-a-quote" ? (
              <li
                ref={(el) => (itemsRef.current[i] = el)}
                key={node.slug}
                onClick={() => setOpenMain(false)}
              >
                <Link to={`/${node.slug}`}>{node.title}</Link>
              </li>
            ) : (
              ""
            )
          )}

          <li
            ref={(el) => (itemsRef.current[12] = el)}
            style={{ marginTop: "1.2rem" }}
          >
            <Link className="btn btn-blue" to="/get-a-quote">
              GET A QUOTE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
