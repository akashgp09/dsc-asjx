import styles from "./speakers.module.css";
export default function Speakers() {
  return (
    <>
      <div className={styles.background} id="speakers-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Guests</span>
        </div>
        <div className={`container-fluid ${styles.speakers}`}>
          <div className="row d-flex justify-content-center">
            <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/gurupreet-singh.jpg"
                  alt="Speaker 1"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Gurupreet Singh
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Speaker
                    <br /> Foodpanda(APAC)
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
                  src="/images/speakers/himanshu-singh.jpg"
                  alt="Speaker 2"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Himanshu Singh
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Speaker
                    <br /> Google Developer Expert
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
                  src="/images/speakers/judge-pr.jpg"
                  alt="Jugde 1"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Prudhvi Reddy
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Judge
                    <br />
                    Zomato(SDE)
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
                  src="/images/speakers/judge-2.jpg"
                  alt="Judge 2"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Kshitij Chauhan
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    Judge
                    <br />
                    Upcover(M.E.)
                  </p>
                </div>
              </div>
            </div>
            {/* <div
              className={`${styles.speaker_img_wrapper} col-md-4 d-flex justify-content-center p-4`}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="/images/speakers/coming-soon.png"
                  alt="Speaker 3"
                />
                <div className="card-body text-center">
                  <h5 className={`${styles.speaker_name} card-title`}>
                    Speaker 3
                  </h5>
                  <p className={`${styles.speaker_description} card-text`}>
                    SDE
                    <br /> Comapny
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
