import styles from "./schedule.module.css";
import { useEffect } from "react";
const progress = () => {
  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  let flag = false;
  if (currentYear >= 2021) {
    if (currentMonth === 0) {
      if (currentDate > 21 || currentYear > 2021) {
        flag = true;
      } else {
        flag = false;
      }
    } else {
      flag = true;
    }
  }
  if (currentDate > 10 || flag) {
    document.getElementById("day1").style.backgroundColor = "red";
    document.getElementById("day1").classList.add("progress_dot1");
  }

  if (currentDate > 13 || flag) {
    document.getElementById("day2").style.backgroundColor = "red";
    document.getElementById("day2").classList.add("progress_dot2");
  }
  if (currentDate > 14 || flag) {
    document.getElementById("day3").style.backgroundColor = "red";
    document.getElementById("day3").classList.add("progress_dot3");
  }
  if (currentDate > 15 || flag) {
    document.getElementById("day4").style.backgroundColor = "red";
    document.getElementById("day4").classList.add("progress_dot4");
  }
  if (currentDate > 17 || flag) {
    document.getElementById("day5").style.backgroundColor = "red";
    document.getElementById("day5").classList.add("progress_dot5");
  }
  if (currentDate > 20 || flag) {
    document.getElementById("day6").style.backgroundColor = "red";
    document.getElementById("day6").classList.add("progress_dot6");
  }
  if (currentDate > 21 || flag) {
    document.getElementById("day7").style.backgroundColor = "red";
    document.getElementById("day7").classList.add("progress_dot7");
  }
};
const Schedule = () => {
  useEffect(() => {
    progress();
  });

  return (
    <>
      <div className={styles.background} id="schedule-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Schedule</span>
        </div>
        <section className={styles.timeline}>
          <ul>
            <li
              id="day1"
              style={{
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              <div className={styles.content}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day1_left}`}
                  >
                    11th January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day2">
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day2_right}`}
                  >
                    14th January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day3">
              <div className={styles.content}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day3_left}`}
                  >
                    15th January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day4">
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day4_right}`}
                  >
                    16th January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day5">
              <div className={styles.content}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day5_left}`}
                  >
                    18th January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day6">
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day6_right}`}
                  >
                    21st January 2021
                  </time>
                </span>
              </div>
            </li>
            <li id="day7">
              <div className={styles.content}>
                <span className={styles.date}>
                  <time
                    className={`${styles.unselectable} ${styles.tooltip} ${styles.day7_left}`}
                  >
                    22nd January 2021
                  </time>
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Schedule;
