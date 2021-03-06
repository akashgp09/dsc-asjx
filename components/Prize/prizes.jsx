import styles from "./prizes.module.css";
export default function Prizes() {
  return (
    <>
      <div className={styles.background} id="prizes-section">
        <img
          src="/images/trophyLeft.png"
          alt="Trophy"
          className={styles.trophyLeft}
        />
        <img
          src="/images/trophyRight.png"
          alt="Trophy"
          className={styles.trophyRight}
        />
        <img
          src="/images/party-popper-left.png"
          alt="Party Popper"
          className={styles.popperLeft}
        />
        <img
          src="/images/party-popper-right.png"
          alt="Party Popper"
          className={styles.popperRight}
        />
        <div className={styles.bar_left}></div>
        <div className={styles.bar_right}></div>
        <div className={styles.header}>
          <span className={styles.half_background}>Prizes</span>
        </div>
        <div className={styles.prize_type_head}>
          Prize pool worth ₹8,00,000!
        </div>
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
              className={`col-md-4 col-lg-3 mb-5 col-9 card mr-md-1 ${styles.prize_img_wrapper_sponsor}`}
            >
              <img
                src="/images/sponsors/tezos.png"
                alt="Tezos"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -₹20,000 for best Dapp built on Tezos
                <br />
                -Continuity Grant opportunity for exceptional builders
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 card  mx-md-1 ${styles.prize_img_wrapper_sponsor} align-self-center`}
            >
              <img
                src="/images/sponsors/matic.png"
                alt="Matic"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -₹10,000 for the best hack built on Ethereum <br />
                -₹15,000 for the best hack built on Ethereum + Matic
                <br />
                -Eligibility to apply for internship/full-time roles and seed
                funding of up to 5,000 USD for winners!
              </p>
            </div>
            <div
              className={`col-md-4 col-lg-3 mb-5 col-9 card  ml-md-1 ${styles.prize_img_wrapper_sponsor} align-self-end`}
            >
              <img
                src="/images/sponsors/portis.png"
                alt="Portis"
                className={styles.prize_img_size}
              />
              <br />
              <p className={styles.sponsors_prize}>
                -₹15,000 for best Dapp built on Portis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
