import styles from "./Home.module.css";

//import { StyledContainer } from "../../ui/StyledContainer";
import { StyledSection } from "../../ui/StyledSection";
import SkillsIcons from "./SkillsIcons";
import CloudSkillIcons from "./CloudSkillIcons";
import { StyledImg } from "../../ui/StyledImg";
import { StyledTitle } from "../../ui/StyledTitle";
import SocialIcons from "./SocialIcons";
import { StyledIconsContainer } from "../../ui/StyledIconContainer";

function Home() {
  return (
    <>
      <StyledSection>
        <div className={styles.content}>
          <StyledTitle>Front-End Developer</StyledTitle>
          <p className={styles.para}>
            Hi, I&apos;m Chandra Shekar Mekala. A passionate Front-end React
            Developer based on Hyderabad, Telangana 🗺️📌
          </p>
          <StyledIconsContainer>
            <SocialIcons />
          </StyledIconsContainer>
        </div>

        <StyledImg src="images/Coding.jpg" alt="coding"></StyledImg>
      </StyledSection>
      <StyledSection>
        <div>
          <h1 className={styles.sectionHeading}>What I do ?</h1>
          <h1 className={styles.heading}>Full Stack</h1>
          <div className={styles.sectionDetails}>
            <ul>
              <li>⚡ Building reponsive Web Applications using React</li>
              <li>
                ⚡ Creating Application backend using SupaBase, Spring,
                Nodejs(express.js)
              </li>
            </ul>
            <StyledIconsContainer>
              <SkillsIcons />
            </StyledIconsContainer>
          </div>
        </div>

        <StyledImg src="images/WhatIDo.gif" alt="what-I-do" />
      </StyledSection>
      <StyledSection reverse="true">
        <div>
          <h1 className={styles.heading}>Cloud Infra-Architecture</h1>
          <div className={styles.sectionDetails}>
            <ul>
              <li>⚡ Experience working on cloud platforms</li>
              <li>
                ⚡ Hosting and maintaining websites on virtual machine instances
                along with integration of databases
              </li>
            </ul>
          </div>
          <StyledIconsContainer>
            <CloudSkillIcons />
          </StyledIconsContainer>
        </div>
        <StyledImg src="images/CloudComputing.gif" />
      </StyledSection>
    </>
  );
}

export default Home;
