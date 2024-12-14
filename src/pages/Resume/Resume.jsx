import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import Timelineitem from "./Timelineitem";
import SkillItem from "./skillItem"
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
        <Timelineitem
            title="Secondary examination from"
            date="2018 — 2020"
            description="In the year 2020 I have passed secondary examination from Balyagobindapur Jana Karma Vidyapith(H.S.) under West Bengal Board of Secondary Education with 69 %  marks."
          />
          <Timelineitem
            title="higher Secondary examination from"
            date="2020 — 2022"
            description="In the year 2022,I have passed my higher Secondary examination from Amarshi Raghunath High School(H.S.) under West Bengal Council of Higher Secondary Education with 86.6 % marks."
          />
          <Timelineitem
            title="University "
            date="2022 — 2026"
            description="In the year 2022 I got admission into Government College Of Engineering and Textile Technology, Berhampore, West Bengal, as a Computer Science And Engineering Student."
          />
        </ol>
      </div>
      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
