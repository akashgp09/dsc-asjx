import styles from "./prizes.module.css";
export default function Prizes() {
  return (
    <>
      <div className={styles.background} id="prizes-section">
        <div className={styles.header}>
          <span className={styles.half_background}>Prizes</span>
        </div>
        <div className={styles.prize_type_head}>
          <img src="/images/Rectangle.svg" align="left" className={styles.r1} />
          Prizes to win from a pool worth 8Lac
          <img src="/images/Rectangle.svg" align="right" className={styles.r2} />
        </div>
        <img src="/images/small-trophy.svg" align="left" className={styles.smalltrophy}/>
        <div className="container text-center">
          <div className="row d-flex justify-content-around mt-5">
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 mr-md-1   ${styles.prize_img_wrapper_position} ${styles.prize_wrapper_position}`}
            >
              <p>
                <span className={styles.prize_label_position}>1st Prize</span>
                <br />
                <span>
                  -Goodies by Coding Ninjas
                  <br />
                  -90% off on all courses by Coding Blocks
                  <br />
                  -Tees by Devfolio
                  <br /> -Stickers by Hackclub
                </span>
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9   mx-md-1  ${styles.prize_img_wrapper_position} ${styles.prize_wrapper_position} align-self-center`}
            >
              <p>
                <span className={styles.prize_label_position}>2nd Prize</span>
                <br />

                <span>
                  -Tees by Coding Ninjas
                  <br />
                  -80% off on all courses by Coding Blocks
                  <br />
                  -Tees by Devfolio
                  <br /> -Stickers by Hackclub
                </span>
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9  ml-md-1  ${styles.prize_img_wrapper_position} ${styles.prize_wrapper_position} align-self-end`}
            >
              <p>
                <span className={styles.prize_label_position}>3rd Prize</span>
                <br />
                <span>
                  -Goodies by Coding Ninjas
                  <br />
                  -70% off on all courses by Coding Blocks
                  <br />
                  -Tees by Devfolio
                  <br /> -Stickers by Hackclub
                </span>
              </p>
            </div>
          </div>
        </div>
        <img src="/images/big-trophy.svg" className={styles.bigtrophy} align="right"/>
        <div className="container text-center">
          <div className="row justify-content-center ">
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 ${styles.prize_img_wrapper} ${styles.prize_wrapper} align-self-center`}
            >
              <p>
                <span className={styles.prize_label}>For all Participants</span>
                <br />
                <span>
                  -20% discount + 1500 off on kotlin and 15% discount on all
                  courses by Coding Ninjas
                  <br />
                  -Rs. 1000 off on all courses by Coding Blocks
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row d-flex justify-content-around">
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 card mr-md-1 ${styles.prize_img_wrapper}`}
            >
              <img
                src="/images/sponsors/tezos.png"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -Rs.10000 for best D app built on tezos
                <br />
                -Rs.5000 for runners
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 card  mx-md-1 ${styles.prize_img_wrapper} align-self-center`}
            >
              <img
                src="/images/sponsors/matic.png"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -Rs.10000 for best app built on Ethereum <br />
                -Rs.15000 for best app built on ethereum and portis
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 card  ml-md-1 ${styles.prize_img_wrapper} align-self-end`}
            >
              <img
                src="/images/sponsors/portis.png"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -200 USD (Crypto) for best app built on portis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
