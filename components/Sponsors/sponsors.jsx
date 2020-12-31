import styles from "./sponsors.module.css";
export default function Sponsors() {
  return (
    <>
      <div className={styles.background} id="sponsors-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Sponsors</span>
        </div>
        <div className={styles.sponsor_type}>Title Sponsor</div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-center`}
            >
              <img
                src="/images/sponsors/cn_new.png"
                className={styles.sponsor_img_size}
              />
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Platinum Sponsor</div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <img
                src="/images/sponsors/devfolio.png"
                className={styles.sponsor_img_size}
              />
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Gold Sponsors</div>
        <div className="container text-center">
          <div className="row">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <img
                src="/images/sponsors/t.png"
                className={styles.sponsor_imgbig_size}
              />
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-center`}
            >
              <img
                src="/images/sponsors/m.png"
                className={styles.sponsor_imgbig_size}
              />
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-end`}
            >
              <img
                src="/images/sponsors/portis.png"
                className={styles.sponsor_img_size}
              />
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Silver Sponsors</div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <img
                src="/images/sponsors/hc.png"
                className={styles.sponsor_img_size}
              />
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-end`}
            >
              <img
                src="/images/sponsors/cb.png"
                className={styles.sponsor_img_size}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
