import React from "react";
import emailjs from "emailjs-com";
import "./style.css";
import "../../MiniComponents/home_left/style.css";
import { NotificationManager } from "react-notifications";
import { Button, Form, Segment } from "semantic-ui-react";

export default function contactme() {
  function sendEmail(e) {
    e.preventDefault();
    var templateParams = {
      name: e.target.user_name.value,
      message: e.target.message.value,
      from: e.target.user_email.value,
    };

    emailjs
      .send(
        "service_9oshtzo",
        "template_ena3zvs",
        templateParams,
        "user_992GzAS4G64lHg9uypIiH"
      )
      .then(
        function (response) {
          NotificationManager.success(
            "Your message was sent successfully",
            "Success"
          );
        },
        function (error) {
          NotificationManager.error("Try Again", "Error");
        }
      );
  }

  return (
    <div className="contact_div" id="contactme">
      <h1 className="section-title" style={{ color: "white" }}>
        <span className="text-black" style={{ textAlign: "center" }}>
          Contact Me
        </span>
      </h1>
      <Segment inverted>
        <Form inverted onSubmit={sendEmail}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              required
              label="First name"
              placeholder="First name"
              name="user_name"
            />
            <Form.Input
              fluid
              required
              label="Email"
              placeholder="123@xyz.com"
              name="user_email"
            />
          </Form.Group>
          <Form.TextArea
            label="Message"
            required
            placeholder="Write your message"
            name="message"
          />
          <Button className="contactBtn" type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
