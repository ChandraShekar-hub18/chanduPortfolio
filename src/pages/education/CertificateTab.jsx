// import { StyledImg } from "../../ui/StyledImg";
import styles from "./CertificateTab.module.css";
import { StyledLink } from "../../ui/StyledLink";

//eslint-disable-next-line
function CertificateTab({ name, image, from, to }) {
  return (
    <StyledLink to={to}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.imgDiv}>
            <img alt={name} src={image} className={styles.img} />
          </div>
        </div>
        <div className={styles.content}>
          <h1>{name}</h1>
          <h2>-{from}</h2>
        </div>
      </div>
    </StyledLink>
  );
}

export default CertificateTab;
