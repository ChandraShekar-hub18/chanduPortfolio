import { StyledImg } from "../../ui/StyledImg";
// import { StyledRow } from "../../ui/StyledRow";
import styles from "./Work.module.css";

function WorkTab({
  // eslint-disable-next-line
  name, // eslint-disable-next-line
  designation, // eslint-disable-next-line
  description, // eslint-disable-next-line
  dateOfJoining, // eslint-disable-next-line
  dateOfReleiving, // eslint-disable-next-line
  location, // eslint-disable-next-line
  image,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <StyledImg alt={name} src={image} size={10} />
      </div>
      <div className={styles.workTab}>
        <div className={styles.jobHeading}>
          <div>
            <h1>{designation}</h1>
            <h2>{name}</h2>
          </div>
          <div className={styles.jobDuration}>
            <h2>
              {dateOfJoining}-{dateOfReleiving}
            </h2>
            <h2>{location}</h2>
          </div>
        </div>
        <h3 className={styles.jobDescription}>{description}</h3>
      </div>
    </div>
  );
}

export default WorkTab;
