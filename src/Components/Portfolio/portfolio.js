import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TTT from "../../assets/img/unnamed.webp";
import GTT from "../../assets/img/IMG-20210322-WA0006.jpg";

export default function portfolio() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      title: "Vorides",
      subtitle: "Ride Sharing App",
      description:
        "Vorides is Cameroon’s safest and most affordable intercity and Intra-city ride-sharing platform. Vorides is available throughout the country, all you need is the internet, a smartphone, and be ready to travel!",
      img: [GTT, TTT, TTT],
      link:
        "https://play.google.com/store/apps/details?id=com.app.vorides&hl=en&gl=US",
    },
    {
      title: "Weltp Gold",
      subtitle: "Subscription based App for party clubs.",
      description:
        "Weltp Gold is the new subscription based app. This app will allow you to obtain a membership for your favorite organisations. Quickly access the membership by entering in an ID provided by the organiser, signup and you're all good to go. Unique QR code allows you to scan your membership once you arrive at the event. Email support@weltp.com if you're interested in creating your own membership.",
      img: [TTT, TTT, TTT],
      link:
        "https://play.google.com/store/apps/details?id=com.digital.thepartyclub&hl=en&gl=US",
    },
    {
      title: "WC FlashMath",
      subtitle: "Quiz App for students",
      description:
        "Wildcat FlashMath is a mobile application designed to quiz students on various Math topics. This app is designed for Valdosta School Systems. Current students must use their account login to access the mobile application. The various math topics include Telling Time, Counting Money, Fractions, Addition, Subtraction, Multiplication, Division, and Word Problems.",
      img: [TTT, TTT, TTT],
      link:
        "https://play.google.com/store/apps/details?id=com.digital.flashmath&hl=en&gl=US",
    },
    {
      title: "Payfran",
      subtitle: "Money transfer App",
      description:
        "Payfran is a money transfer App. This app is designed for payfran clients so they can transfer money internationally with ease",
      img: [TTT, TTT, TTT],
    },
  ];

  const portfolio = data.map((data, index) => {
    return (
      <div
        className={`container mainDiv ${
          index % 2 === 0 ? "evenDiv" : "oddDiv"
        }`}
      >
        <div className="row h-100 pt-5 pb-5">
          <div
            className={`col-sm-6 d-flex flex-column justify-content-center ${
              index % 2 === 0 ? "order-md-1" : "order-md-2"
            }`}
          >
            <h1 className="portfolioTitle">{data.title}</h1>
            <div className="d-flex align-items-center">
              <div className="dash mr-2" />
              <h6 className="portfolioSubtitle">{data.subtitle}</h6>
            </div>
            <p className="description">{data.description}</p>
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="home-left-aboutmme-btn btn btn-outline-light portfolioButton"
              >
                View Project
              </a>
            )}
          </div>
          <div
            className={`col-sm-6 ${
              index % 2 === 0 ? "order-md-2" : "order-md-1"
            }`}
          >
            {" "}
            <Slider className="sliderClass" {...settings}>
              {data.img.map((temp) => {
                return (
                  <div className="w-100 d-flex justify-content-center">
                    <img className="portfolioImg" src={TTT} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  });

  return <div>{portfolio}</div>;
}
