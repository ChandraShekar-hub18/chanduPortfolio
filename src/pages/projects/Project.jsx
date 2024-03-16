import { StyledImg } from "../../ui/StyledImg";

import { StyledRow } from "../../ui/StyledRow";
import { StyledSection } from "../../ui/StyledSection";
import { StyledTitle } from "../../ui/StyledTitle";
import styles from "./Project.module.css";

function Project() {
  return (
    <>
      <StyledSection>
        <StyledImg src="/images/project.gif" />
        <StyledRow col="true" className={styles.content}>
          <StyledTitle>Project</StyledTitle>
          <h1 className={styles.para}>
            My expertise lies in crafting Data Science projects and seamlessly
            deploying hem on to web applications utilizing cutting-edge
            technology tools and cloud infrastructure.
          </h1>
        </StyledRow>
      </StyledSection>
      <StyledSection
        backgroundColor="rgb(97, 97, 97)"
        className={styles.projectsSection}
      >
        <h1 className={styles.projectStatus}>Projects are coming soon... 😁</h1>
      </StyledSection>
    </>
  );
}

export default Project;
