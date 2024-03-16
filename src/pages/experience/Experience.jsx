import { useState } from "react";
import styled from "styled-components";
import { StyledSection } from "../../ui/StyledSection";
import { StyledImg } from "../../ui/StyledImg";
import { StyledTitle } from "../../ui/StyledTitle";
import { StyledRow } from "../../ui/StyledRow";
import { InternshipExperience as internships } from "./InternshipExperience";
import WorkTab from "./WorkTab";
import { WorkExperience as works } from "./WorkExperience";

const StyledTab = styled.div`
  background-color: var(--secondary-white);
  height: 5rem;
  width: 100%;
  font-size: large;
  border-radius: 25px;
  padding: 3rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

function Experience() {
  const [workSelected, setWorkSelected] = useState(false);
  const [internshipSelected, setInternshipSelected] = useState(false);

  return (
    <>
      <StyledSection>
        <StyledRow col="true">
          <StyledTitle>Experience</StyledTitle>
          <h1>Work, Internship</h1>
        </StyledRow>
        <StyledImg src="/images/Resumefolder.gif" alt="resume"></StyledImg>
      </StyledSection>
      <StyledSection col="true">
        <StyledTab onClick={() => setWorkSelected((s) => !s)}>
          <span>Work</span>
          {!workSelected && <span>&gt;</span>}
        </StyledTab>
        {workSelected &&
          works.map((work) => {
            return (
              <WorkTab
                name={work.name}
                designation={work.designation}
                dateOfJoining={work.dateOfJoining}
                dateOfReleiving={work.dateOfReleiving}
                description={work.description}
                location={work.location}
                image={work.image}
                key={work.name}
              />
            );
          })}
        <StyledTab onClick={() => setInternshipSelected((s) => !s)}>
          <span>Internship</span>
          {!internshipSelected && <span>&gt;</span>}
        </StyledTab>
        {internshipSelected &&
          internships.map((internship) => {
            return (
              <WorkTab
                name={internship.name}
                designation={internship.designation}
                dateOfJoining={internship.dateOfJoining}
                dateOfReleiving={internship.dateOfReleiving}
                description={internship.description}
                location={internship.location}
                image={internship.image}
                key={internship.name}
              />
            );
          })}
      </StyledSection>
    </>
  );
}

export default Experience;
