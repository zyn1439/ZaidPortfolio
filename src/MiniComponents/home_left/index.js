import React from "react";
import "../home_left/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1 className="first-line">Hello!</h1>
          <h2 className="second_line">
            I am <strong>Muhammad Zaid</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="Mobile App Developer || Software Engineer ... " //text=["Hello.", "World!"]
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h3>
          <br />
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <a
              href="#resume"
              style={{ textDecoration: "none", color: "white" }}
              className="home-left-aboutme"
            >
              About Me
            </a>
          </Button>{" "}
          &nbsp;
          <Button
            variant="outline-light"
            size="lg"
            className="home-left-aboutmme-btn"
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#contactme"
              className="home-left-aboutme"
            >
              Contact Me
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
