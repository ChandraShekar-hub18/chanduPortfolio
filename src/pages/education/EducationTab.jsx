import { StyledImg } from "../../ui/StyledImg";
import styles from "./EducationTab.module.css";
//eslint-disable-next-line
function EducationTab({
  name,
  degree,
  qualification,
  duration,
  description,
  image,
}) {
  return (
    <div className={styles.degreeContent}>
      <div className={styles.imgDiv}>
        <StyledImg src={image} alt={name} className={styles.img} />
      </div>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.content}>
            <h1>{name}</h1>
            <h2>
              {degree} in {qualification}
            </h2>
          </div>
          <div>
            <h2>{duration}</h2>
          </div>
        </div>
        <div className={styles.lower}>
          {
            //eslint-disable-next-line
            description.map((des, index) => {
              return <h3 key={index + 1}>⚡ {des}</h3>;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default EducationTab;
