import styles from "./intro.module.css";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const DevfolioButton = withStyles({
  root: {
    color: "white",
    borderRadius: "1",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    padding: "10px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    padding: "12px 25px",
    backgroundColor: "#4383F2",
    borderColor: "#4383F2",
    "&:hover": {
      color: "white",
      backgroundColor: "#4383F1",
      borderColor: "#4383F1",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#4383F2",
      borderColor: "#4383F2",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

export default function Intro() {
  return (
    <>
      <div className={styles.background} id="landing-section">
        <div className={styles.header}>
          <img
            src="/images/asjx-logo.svg"
            className={(styles.logo_img_size, styles.logo_main)}
          />
        </div>
        <div className={styles.header_text}>
          <span style={{ color: "#3DDB83", fontWeight: "500" }}>
            ANDROID&nbsp;&nbsp; STUDY&nbsp;&nbsp; JAM
          </span>
          <span style={{ color: "#4384F2", fontWeight: "500" }}>
            &nbsp;&nbsp;&nbsp;EXTENDED
          </span>
        </div>
        <div className="row">
          <div className={styles.title}>KIIT's largest android hackathon</div>
          <div className={styles.date}>
            11th January 2021 - 22nd January 2021
          </div>
        </div>
        <div className="row">
          <div className={styles.title}>
            <DevfolioButton
              variant="contained"
              size="large"
              href="https://devfolio.co/home/"
              style={{ backgroundColor: " #4384F2" }}
            >
              Register with Devfolio
            </DevfolioButton>
          </div>
        </div>

        <div className={styles.logo_text}>
          <img src="/images/dsc-logo.svg" className={styles.text_img_size} />
        </div>
      </div>
    </>
  );
}
