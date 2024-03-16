import { StyledSection } from "../../ui/StyledSection";
import { StyledTitle } from "../../ui/StyledTitle";
import { StyledImg } from "../../ui/StyledImg";
import { StyledRow } from "../../ui/StyledRow";
import styles from "./Education.module.css";
import {
  EducationData as education,
  CertificationData as certificates,
} from "./EducationData";
import EducationTab from "./EducationTab";
import CertificateTab from "./CertificateTab";
import { StyledIconsContainer } from "../../ui/StyledIconContainer";
import { Link } from "react-router-dom";

function Education() {
  return (
    <>
      <StyledSection>
        <StyledRow col="true" className={styles.container}>
          <StyledTitle>Education</StyledTitle>
          <h1>Basic Qualification and Certifications </h1>
          <StyledIconsContainer>
            <Link to="https://www.hackerrank.com/profile/chandrashekar_m3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 32 32"
              >
                <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"></path>
              </svg>
            </Link>

            <Link to="https://stackoverflow.com/users/18073154/chandra-shekar-mekala">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#727d86"
                  d="M32,28.5V39H12V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C9.224,28,9,28.224,9,28.5V41c0,0.552,0.448,1,1,1	h24c0.552,0,1-0.448,1-1V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C32.224,28,32,28.224,32,28.5z"
                ></path>
                <rect width="14" height="3" x="15" y="34" fill="#727d86"></rect>
                <path
                  fill="#89776b"
                  d="M15.081,28.26L29,29.758l-0.321,2.983l-13.92-1.498L15.081,28.26z"
                ></path>
                <path
                  fill="#e36001"
                  d="M36.871,6l2.133,13.835l-2.966,0.457L33.905,6.457L36.871,6z"
                ></path>
                <path
                  fill="#cc661c"
                  d="M28.47,8.237l6.831,12.218l-2.619,1.465L25.851,9.701L28.47,8.237z"
                ></path>
                <path
                  fill="#b66c36"
                  d="M20.501,14.551L32,22.533l-1.711,2.465L18.79,17.016L20.501,14.551z"
                ></path>
                <path
                  fill="#9f7151"
                  d="M16.899,21.218l13.173,4.739l-1.016,2.824l-13.173-4.739L16.899,21.218z"
                ></path>
              </svg>
            </Link>
          </StyledIconsContainer>
        </StyledRow>
        <StyledImg size={46} src="/images/graduation.jpg" />
      </StyledSection>
      <StyledSection col="true" className={styles.educationSection}>
        {education.map((e) => {
          return (
            <StyledRow col="true" key={e.id}>
              <EducationTab
                name={e.name}
                qualification={e.qualification}
                degree={e.degree}
                duration={e.duration}
                description={e.description}
                image={e.image}
              />
            </StyledRow>
          );
        })}
      </StyledSection>
      <StyledSection col="true">
        <StyledTitle>Certificates</StyledTitle>
        <div className={styles.certificateContainer}>
          {certificates.map((certificate) => {
            return (
              <CertificateTab
                name={certificate.name}
                from={certificate.from}
                image={certificate.image}
                to={certificate.to}
                key={certificate.id}
              />
            );
          })}
        </div>
      </StyledSection>
    </>
  );
}

export default Education;
