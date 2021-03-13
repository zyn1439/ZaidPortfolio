import React, { Component } from "react";

const sharedData = {
  icons: [
    {
      class: "devicon-kotlin-plain",
      level: "95",
      name: "Kotlin",
    },
    {
      class: "devicon-java-plain",
      level: "95",
      name: "Java",
    },
    {
      class: "devicon-swift-plain",
      level: "95",
      name: "Swift",
    },
    {
      class: "devicon-flutter-plain",
      level: "95",
      name: "Flutter",
    },
    {
      class: "devicon-firebase-plain",
      level: "95",
      name: "Firebase",
    },
    {
      class: "devicon-git-plain",
      level: "95",
      name: "Git",
    },
    {
      class: "devicon-php-plain",
      level: "95",
      name: "php",
    },
    {
      class: "devicon-mysql-plain",
      level: "95",
      name: "Sql",
    },
    {
      class: "devicon-materialui-plain",
      level: "95",
      name: "Material UI",
    },
    {
      class: "devicon-xd-plain",
      level: "95",
      name: "Adobe Xd",
    },
  ],
};

class Skills extends Component {
  render() {
    var sectionName = "Skills";
    var skills = sharedData.icons.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
