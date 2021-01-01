import styles from "./footer.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles.background} id="landing-section">
        <div className={styles.header}>
          <img
            src="/images/dsc-logo.svg"
            className={(styles.logo_img_size, styles.logo_main)}
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.college_title}>
              KIIT University, Bhubaneswar, 751024
            </div>
            <div className={styles.date}>Email: dsckiit@gmail.com</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>
              <a href="https://www.linkedin.com/in/mishrrag/">Arpit Mishra(ASJX Organiser)</a>
            </div>
            <div className={styles.title}>
              <a href="https://www.linkedin.com/in/praddyum/" className={styles.link}>Praddyum Verma(DSC Lead)</a>
            </div>
          </div>
          <div className="row">
            <div className={styles.social}>
              <span className={styles.space}>
                <a href="https://www.linkedin.com/company/dsckiit/"><LinkedInIcon style={{ fontSize: "2.2rem" }} /></a>
              </span>
              <span className={styles.space}>
                <a href="https://www.instagram.com/dsckiit/"><InstagramIcon style={{ fontSize: "2.2rem" }} /></a>
              </span>
              <span className={styles.space}>
                <a href="https://discord.gg/pqUU6Znd"><FaDiscord style={{ fontSize: "2.2rem" }} /></a>
              </span>
              <span className={styles.space}>
                <a href="https://www.facebook.com/dsckiit"><FacebookIcon style={{ fontSize: "2.2rem" }} /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
