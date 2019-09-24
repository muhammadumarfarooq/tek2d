import React from "react";
import "./Works.css";

import Work from "./Work/Work";

import requirementImg from "../../../assets/work/requirements.png";
import analysisImg from "../../../assets/work/analysis.png";
import developmentImg from "../../../assets/work/development.png";
import testingImg from "../../../assets/work/testing.png";
import deploymentImg from "../../../assets/work/deployment.png";

class Works extends React.Component {
  state = {
    works: [
      {
        title: "Requirements",
        icon: requirementImg,
        number: "01",
        alignment: { cs: "1", colE: "3", rowS: "2", rowE: "3" },
        colorClass: "work__number1"
      },
      {
        title: "Analysis",
        icon: analysisImg,
        number: "02",
        alignment: { cs: "3", colE: "5", rowS: "1", rowE: "2" },
        colorClass: "work__number2"
      },
      {
        title: "Development",
        icon: developmentImg,
        number: "03",
        alignment: { cs: "5", colE: "7", rowS: "2", rowE: "3" },
        colorClass: "work__number3"
      },
      {
        title: "Testing",
        icon: testingImg,
        number: "04",
        alignment: { cs: "7", colE: "9", rowS: "1", rowE: "2" },
        colorClass: "work__number4"
      },
      {
        title: "Deployment",
        icon: deploymentImg,
        number: "05",
        alignment: { cs: "9", colE: "11", rowS: "2", rowE: "3" },
        colorClass: "work__number5"
      }
    ]
  };
  render() {
    return (
      <div class='works'>
        <div class='works-wraper'>
          {this.state.works.map(work => (
            <Work key={work.number} work={work} />
          ))}
        </div>
      </div>
    );
  }
}

export default Works;
