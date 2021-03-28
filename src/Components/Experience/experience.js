import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "./style.css";

const data = [
  {
    company: "Fiverr",
    title: "Mobile Developer",
    years: "04.2016 - Present",
    mainTech: ["Android / IOS Native & Flutter"],
    technologies: [
      "Swift",
      "Java",
      "PHP",
      "Firebase",
      "Flutter",
      "Dart",
      "Git",
      "Jira",
      "Zeplin",
      "Rest Api",
      "Admob",
      "MongoDb",
    ],
    icon: "fa-android",
  },
  {
    company: "Mamaar Foundation",
    title: "Mobile App Developer",
    years: "01.2018 - 12.2019",
    mainTech: ["Android / IOS Native"],
    technologies: [
      "Swift",
      "Java",
      "PHP",
      "Firebase",
      "Git",
      "Jira",
      "Zeplin",
      "Rest Api",
      "Admob",
      "MongoDb",
    ],
    icon: "fa-android",
  },
  {
    company: "O3 Interfaces",
    title: "Android Developer",
    years: "01.2020 - 12.2020",
    mainTech: ["Android Native"],
    technologies: [
      "Kotlin",
      "Java",
      "PHP",
      "Firebase",
      "Git",
      "Jira",
      "Zeplin",
      "Rest Api",
      "Dexguard",
      "Camera X",
      "Stripe",
      "MVVM",
      "Unit Testing",
    ],
    icon: "fa-android",
  },
  {
    company: "OBS Technologia",
    title: "Senior Android Developer",
    years: "01.2021 - present",
    mainTech: ["Android Native - Flutter"],
    technologies: [
      "Kotlin",
      "RxJava",
      "Java",
      "Xml",
      "Dart",
      "Motion Layout",
      "Firebase",
      "One Signal",
      "Material UI",
      "Data Encryption Algorithm (AES)",
      "MVC",
    ],
    icon: "fa-android",
  },
];

class Experience extends Component {
  render() {
    var sectionName = "Experience";
    var work = data.map(function (work, i) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <Badge pill className="main-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      var tech = technologies.map((technology, i) => {
        return (
          <Badge pill className="experience-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className={`fab experience-icon ${work.icon}`}></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle mt-2"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
