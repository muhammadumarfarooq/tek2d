import React from "react";

import "./Works.css";

import Work from "./Work";

import requirementImg from "../../../../assets/work/requirements.png";
import analysisImg from "../../../../assets/work/analysis.png";
import developmentImg from "../../../../assets/work/development.png";
import testingImg from "../../../../assets/work/testing.png";
import deploymentImg from "../../../../assets/work/deployment.png";

class Works extends React.Component {
  state = {
    works: [
      {
        title: "Requirements",
        icon: requirementImg,
        number: "01",
        alignment: "alignment1",
        colorClass: "work__number1"
      },
      {
        title: "Analysis",
        icon: analysisImg,
        number: "02",
        alignment: "alignment2",
        colorClass: "work__number2"
      },
      {
        title: "Development",
        icon: developmentImg,
        number: "03",
        alignment: "alignment3",
        colorClass: "work__number3"
      },
      {
        title: "Testing",
        icon: testingImg,
        number: "04",
        alignment: "alignment4",
        colorClass: "work__number4"
      },
      {
        title: "Deployment",
        icon: deploymentImg,
        number: "05",
        alignment: "alignment5",
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
