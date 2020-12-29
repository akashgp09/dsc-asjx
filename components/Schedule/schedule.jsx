import styles from "./schedule.module.css";

const Schedule = () => {
  return (
    <>
      <div className={styles.background} id="schedule-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Schedule</span>
        </div>
        <section className={styles.timeline}>
          <ul>
            <li>
              <div className={styles.content}>
                <span className={styles.date}>
                  <time>11th January 2021</time>
                </span>
                <p>REGISTRATION OPENS</p>
              </div>
            </li>
            <li>
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time>14th January 2021</time>
                </span>
                <p>REGISTRATION CLOSES</p>
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <span className={styles.date}>
                  <time>15th January 2021</time>
                </span>
                <p>PROBLEM STATEMENT WILL BE PROVIDED</p>
              </div>
            </li>
            <li>
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time>16th January 2021</time>
                </span>
                <p>START WORKING ON YOUR HACK</p>
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <span className={styles.date}>
                  <time>18th January 2021</time>
                </span>
                <p>SUBMISSION OF YOUR PROJECT</p>
              </div>
            </li>
            <li>
              <div className={`${styles.content} ${styles.test}`}>
                <span className={styles.date}>
                  <time>21st January 2021</time>
                </span>
                <p>JUDGING ROUND(FOR SHORTLISTED TEAMS)</p>
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <span className={styles.date}>
                  <time>22nd January 2021</time>
                </span>
                <p>RESULTS WILL BE DECLARED</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Schedule;
