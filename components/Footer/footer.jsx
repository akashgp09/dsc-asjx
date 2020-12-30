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
              School of Computer Engineering, KIIT University, Bhubaneswar,
              751024
            </div>
            <div className={styles.date}>Email: dsckiit@gmail.com</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>
              Arpit Mishra(ASJX Organiser):8336026764
            </div>
            <div className={styles.title}>
              Praddyum Verma(DSC Lead):9956876609
            </div>
          </div>
          <div className="row">
            <div className={styles.social}>
              <span className={styles.space}>
                <LinkedInIcon style={{ fontSize: "2.2rem" }} />
              </span>
              <span className={styles.space}>
                <InstagramIcon style={{ fontSize: "2.2rem" }} />
              </span>
              <span className={styles.space}>
                <FaDiscord style={{ fontSize: "2.2rem" }} />
              </span>
              <span className={styles.space}>
                <FacebookIcon style={{ fontSize: "2.2rem" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
