import styles from "./intro.module.css";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
const Countdown = () => {
  let date = new Date();
  let currentDate = date.getDate();
  let countDownDate;
  if (currentDate < 11) {
    countDownDate = new Date("Jan 11, 2021 00:00:00").getTime();
    document.getElementById("registration_label").innerHTML =
      "Registration Starts in";
  } else {
    countDownDate = new Date("Jan 15, 2021 00:00:00").getTime();
    document.getElementById("registration_label").innerHTML =
      "Registration Closes in";
  }

  let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);

      document.getElementById("registration_label").style.display = "none";
      document.getElementById("counter_box").style.display = "none";
    }
  }, 1000);
};
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
  useEffect(() => {
    Countdown();
  });
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
              letiant="contained"
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

        <p className={styles.registration} id="registration_label"></p>
        <div className={styles.countTimer} id="counter_box">
          <div className={styles.clockBox} id="day">
            <b>24</b>
          </div>
          <div className={styles.clockBox} id="hour">
            <b>24</b>
          </div>
          <div className={styles.clockBox} id="minute">
            <b>24</b>
          </div>
          <div className={styles.clockBox} id="second">
            <b>24</b>
          </div>
        </div>
      </div>
    </>
  );
}
