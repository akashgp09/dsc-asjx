import styles from "./speakers.module.css";
export default function Speakers() {
  return (
    <>
      <div className={styles.background} id="speakers-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Speakers</span>
        </div>
        <div className={`container-fluid ${styles.speakers}`}>
          <div className="row ">
            <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/sm.png"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Steve Rogers
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Captain America
                    <br /> Avengers
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/sm.png"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Steve Rogers
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Captain America
                    <br /> Avengers
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/sm.png"
                  alt="Card image cap"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Steve Rogers
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Captain America
                    <br /> Avengers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
