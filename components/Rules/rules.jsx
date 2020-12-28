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
                    <span className={styles.number}>1.</span>
                    2-3 members per team
                </div>
            </div>
            <div className="row">
                <div className={styles.rule}>
                    <span className={styles.number}>2.</span>
                    Inter college
                </div>
            </div>
            <div className="row">
                <div className={styles.rule}>
                    <span className={styles.number}>3.</span>
                    Mandatory for ASJ certificates
                </div>
            </div>
            <div className="row">
                <div className={styles.rule}>
                    <span className={styles.number}>4.</span>
                    Only for ASJ participants of DSC KIIT and track2
                </div>
            </div>
            <div className="row">
                <div className={styles.rule}>
                    <span className={styles.number}>5.</span>
                    Steps:Repo + Drive[APK + Screenshots + Video Walkthrough]
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
