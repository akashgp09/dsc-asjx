import styles from "./sponsors.module.css";
import Link from "next/link";
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
              <Link href="https://www.codingninjas.com/">
                <img
                  src="/images/sponsors/cn.png"
                  alt="Coding Ninja"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Platinum Sponsor</div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <Link href="https://devfolio.co/">
                <img
                  src="/images/sponsors/devfolio.png"
                  alt="Devfolio"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Gold Sponsors</div>
        <div className="container text-center">
          <div className="row">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <Link href="https://tezos.com/">
                <img
                  src="/images/sponsors/tezos.png"
                  alt="Tezos"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-center`}
            >
              <Link href="https://matic.network/">
                <img
                  src="/images/sponsors/matic.png"
                  alt="Matic"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-end`}
            >
              <Link href="https://www.portis.io/">
                <img
                  src="/images/sponsors/portis.png"
                  alt="Portis"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sponsor_type}>Silver Sponsors</div>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className={`col-md-4  ${styles.sponsor_img_wrapper}`}>
              <Link href="https://codingblocks.com/" target="_blank">
                <img
                  src="/images/sponsors/cb.png"
                  alt="Coding Blocks"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
            <div
              className={`col-md-4  ${styles.sponsor_img_wrapper} align-self-end`}
            >
              <Link href="https://hackclub.com/">
                <img
                  src="/images/sponsors/hc.png"
                  alt="HackClub"
                  className={styles.sponsor_img_size}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
