import styles from "./rules.module.css";

export default function Rules() {
  return (
    <>
      <div className={styles.background} id="rules-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Rules</span>
        </div>
        <div className="container">
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>1.</span> Each participant has to
              register on Devfolio. Confused? Watch video:{" "}
              <a href="" className={styles.link} target="_blank">
                link
              </a>
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>2.</span> Team Size: 2 to 3
              members
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>3.</span> Event is open to
              Undergrad Android Developers
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>4.</span> Accepted Languages :
              Kotlin/Java (Kotlin is preferred)
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>5.</span> Problem Domains
              <div className={styles.alpha}>a. Medicine</div>
              <div className={styles.alpha}>b. Education</div>
              <div className={styles.alpha}>c. Environment</div>
              <div className={styles.alpha}>d. Pandemic</div>
              <div className={styles.alpha}>e. Open Innovation</div>
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>6.</span> All the submissions will
              first be reviewed by the organizing committee & the top 10
              submissions will qualify for review by a panel of judges.
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>7.</span> Submission Format for
              Devfolio/
              <a
                href="https://guide.devfolio.co/during-hackathon/submissions-on-devfolio"
                className={styles.link}
                target="_blank"
              >
                Click Here
              </a>
              <div className={styles.alpha}>a. APK file</div>
              <div className={styles.alpha}>b. Project Summary on DevFolio</div>
              <div className={styles.alpha}>c. GitHub link(Public Repo)</div>
              <div className={styles.alpha}>d. Walkthrough Video</div>
              <div className={styles.alpha}>e. Screenshots</div>
            </div>
          </div>
          <div className="row">
            <div className={styles.rule}>
              <span className={styles.number}>8.</span> Rules can be modified by
              Organisers.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
