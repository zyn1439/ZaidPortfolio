import React from "react";
import "../Home/style.css";
import HomeLeft from "../../MiniComponents/home_left";
import HomeRight from "../../MiniComponents/home_right";
import { Container, Row, Col } from "react-bootstrap";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../../const/particle.js";

function Home() {
  return (
    <div>
      <Animate to="1" from="0" attributeName="opacity">
        <Particles params={particles} className="particles" />
        <Container className="App-header">
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>
        </Container>
      </Animate>
    </div>
  );
}

export default Home;
