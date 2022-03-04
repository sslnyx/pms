import { useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";
import { formFields } from "../../../lib/staticData";
import axios from "axios";
import Helmet from "react-helmet";

const GetAQuote = ({ pageContent: { content, title } }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSucess, setSubmitSucess] = useState(false);
  const [errors, setErrors] = useState();
  const url = import.meta.env.VITE_APP_CONTACT_API_URL;

  const submit = async (ev) => {
    ev.preventDefault();
    setErrors(null);
    setSubmitting(true);
    const formData = new FormData(ev.target);
    const plainFormData = Object.fromEntries(formData.entries());
    const submitData = JSON.stringify(plainFormData);

    console.log(submitData);

    try {
      const res = await axios.post(url, formData);
      console.log(res.data);

      setErrors(res?.data?.invalid_fields);
      setSubmitting(false);

      if (res.data.status === "mail_sent") {
        setSubmitSucess(true);
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json; charset=UTF-8",
    //   },
    //   body: submitData,
    // });
    // const json = await res.json();
    // console.log(json);
  };

  const errorHandler = (name) => {
    const error = errors.find(({ error_id }) => error_id === `-ve-${name}`);
    if (error) return error.message;
  };

  return (
    <>
      <Helmet>
        <title>Get A Quote</title>
      </Helmet>
      {!submitSucess ? (
        <div className="form-container get-a-quote">
          <div className="page-title content text-center">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>

          <section>
            <h2 className="text-center" style={{ margin: "2rem 1rem" }}>
              Tell Us About Your Project
            </h2>
            <form onSubmit={submit} className="content" v-if="show">
              <Row className="w-100 m-0">
                {formFields.map(({ name, type, ph, options }, i) => (
                  <Col xs={6} className="form-group" key={i}>
                    {type !== "select" && type !== "textarea" ? (
                      <>
                        <input
                          name={name}
                          placeholder={ph}
                          className="form-control"
                        />

                        {errors ? (
                          <span class="text-danger">{errorHandler(name)}</span>
                        ) : (
                          ""
                        )}
                      </>
                    ) : type === "select" ? (
                      <div className="select-wrapper">
                        <select name={name} id="" defaultValue="">
                          <option value="" disabled hidden>
                            {ph}
                          </option>
                          {options.map((val, i) => (
                            <option key={i}>{val}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <textarea
                        className="form-control"
                        placeholder={ph}
                      ></textarea>
                    )}
                  </Col>
                ))}
              </Row>

              <div
                className="submit-wrapper d-flex justify-content-center align-items-center"
                style={{ height: "57px", width: "150px" }}
              >
                {!submitting ? (
                  <button
                    type="submit"
                    className="btn btn-submit btn-primary m-0"
                  >
                    START A QUOTE
                  </button>
                ) : (
                  <Spinner animation="grow" />
                )}
              </div>
            </form>
          </section>
        </div>
      ) : (
        <section
          className="thankyou"
          style={{ marginTop: "150px", padding: "22px" }}
        >
          <div className="page-title content text-center">
            <h1 style={{ marginBottom: "2rem" }}>Thank you</h1>
            <p style={{ marginBottom: "100px" }}>
              Thanks for the opportunity to quote on your project. One of our
              specialists will be in touch.
            </p>

            <h2 style={{ fontWeight: "700" }}>
              Want to Chat with Us Immediately?
            </h2>
            <p style={{ maxWidth: "400px", marginBottom: "1rem" }}>
              If you need to speak with us right away or have any further
              questions don’t hesitate to contact us today.
            </p>

            <p style={{ fontWeight: "700" }}>
              T:
              <a href="tel:604.251.3766" className="text-blue">
                {" "}
                604.251.3766
              </a>
              <br />
              E:
              <a href="mailto:info@pacificmechanical.ca" className="text-blue">
                {" "}
                info@pacificmechanical.ca
              </a>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default GetAQuote;
