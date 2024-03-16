import { StyledIconsContainer } from "../../ui/StyledIconContainer";
import { StyledImg } from "../../ui/StyledImg";
import { StyledSection } from "../../ui/StyledSection";
import { StyledTitle } from "../../ui/StyledTitle";
import SkillsIcons from "../home/SkillsIcons";
import SocialIcons from "../home/SocialIcons";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <StyledSection col>
        <div className={styles.imgDiv}>
          <StyledImg src="/images/prof.jpg" className={styles.img} />
        </div>
        <div className={styles.content}>
          <StyledTitle>About</StyledTitle>
          <h1 className={styles.para}>
            Working Software Engineer enthusiast on Data science and
            technologies. Ready to collaborate on Open Source Projects.
          </h1>
          <StyledIconsContainer>
            <SkillsIcons />
          </StyledIconsContainer>
        </div>
      </StyledSection>
      <StyledSection>
        <div className={styles.content}>
          <div>
            <StyledTitle>Contact Me</StyledTitle>
            <h1 className={styles.para}>
              I&apos;m available 24/7 so contact me for your dream projects.
              Let&apos;s craft your dream to reality.
            </h1>
            <SocialIcons />
          </div>
          <div>
            <button className={styles.button}>Hit Me!!</button>
          </div>
        </div>
      </StyledSection>
    </>
  );
}

export default About;
