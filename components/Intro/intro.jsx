import styles from "./intro.module.css";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
const Countdown = () => {
  let date = new Date();
  let currentDate = date.getDate();
  let countDownDate;
  if (currentDate < 6) {
    countDownDate = new Date("Jan 6, 2021 00:00:00").getTime();
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
        <img
          src="/images/android.gif"
          alt="Android"
          className={styles.android1}
        />
        <img
          src="/images/android2.gif"
          alt="Android"
          className={styles.android2}
        />
        <div className={styles.header}>
          <img
            src="/images/asjx-logo.svg"
            alt="ASJ-X Logo"
            className={(styles.logo_img_size, styles.logo_main)}
          />
        </div>
        <div className={styles.header_text}>
          <span style={{ color: "#3DDB83", fontWeight: "700" }}>
            ANDROID&nbsp;&nbsp; STUDY&nbsp;&nbsp; JAM
          </span>
          <span style={{ color: "#4384F2", fontWeight: "700" }}>
            &nbsp;&nbsp;&nbsp;EXTENDED
          </span>
        </div>
        <div className="row">
          <div className={styles.android_img_wrapper}>
            <img
              src="/images/android.gif"
              alt="Android"
              className={styles.android_small}
            />
          </div>
          <div className={styles.title}>KIIT's largest android hackathon</div>
          <div className={styles.date}>
            6th January 2021 - 22nd January 2021
          </div>
        </div>
        <div className="row">
          <div className={styles.title}>
            {/* <DevfolioButton
              letiant="contained"
              size="large"
              href="https://asjx.devfolio.co/"
              style={{ backgroundColor: " #4384F2" }}
            >
              <svg
                class="logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 115.46 123.46"
                style={{ height: 24, width: 24, marginRight: 8 }}
              >
                <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
                <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
              </svg>
              Apply with Devfolio
            </DevfolioButton> */}
            <div 
              class="apply-button" 
              data-hackathon-slug="YOUR-HACKATHON-SLUG" 
              data-button-theme="light"
              style={{height: '44px', width: '312px'}}
            ></div>
          </div>
        </div>

        <div className={styles.logo_text}>
          <img
            src="/images/dsc-logo.svg"
            alt="DSC KIIT"
            className={styles.text_img_size}
          />
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
