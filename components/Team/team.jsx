import styles from "./team.module.css";

export default function Team() {
  return (
    <>
      <div className={styles.background} id="team-section">
        <img src="/images/mouse.png" alt="Trophy" className={styles.mouse} />
        <img src="/images/laptop.png" alt="Trophy" className={styles.laptop} />
        <div className={styles.bar_left}></div>
        <div className={styles.bar_right}></div>
        <div className={styles.header}>
          <span className={styles.half_background}>Team</span>
        </div>
        <div className={styles.team_header}>
          Meet the folks behind this event
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="/images/team/arpit-mishra.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Arpit Mishra</span>
                  <br />
                  <span className={styles.role}>Organiser</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/mishrraG">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mishrrag/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/mish_rr_a">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/praddyum-verma.png"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Praddyum Verma</span>
                  <br />
                  <span className={styles.role}>DSC LEAD</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/Praddy2009">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/praddyum/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/Praddyum1">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="/images/team/debanshu-datta.jpg/"
                  alt="Team Member"
                  className={styles.member_img}
                />

                <div className={styles.bottom_left}>
                  <span className={styles.name}>Debanshu Datta</span>
                  <br />
                  <span className={styles.role}>Android</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/Debanshu777">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/debanshu-datta-483376169">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="http://twitter.com/DattaDebanshu">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/satyajit-mishra.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Satyajit Mishra</span>
                  <br />
                  <span className={styles.role}>Android,Sponsorship</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/smish-hash">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="http://www.linkedin.com/in/smish01">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  {/* <a href="">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/aman-verma.png"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Aman Verma</span>
                  <br />
                  <span className={styles.role}>Android,Sponsorship</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/amanv8060">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://linkedin.com/in/amanv8060">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/amanv8060">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="/images/team/ayush-raj.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Ayush Raj</span>
                  <br />
                  <span className={styles.role}>Android</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/AYUSTARK/">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ayustark">
                    <i className="fab fa-linkedin fa-fw fa-lg social_margin"></i>
                  </a>
                  <a href="https://mobile.twitter.com/Ayustark">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/arpit-mohapatra.png"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Arpit Mohapatra</span>
                  <br />
                  <span className={styles.role}>Web Developer</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/marpit19">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/arpit-mohapatra-b40aa9120/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/Arpit19112000">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/akash-gupta.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Akash Gupta</span>
                  <br />
                  <span className={styles.role}>Web Developer</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/akashgp09">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/akashgp09/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/akashgp09">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/soham-malakar.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />

                <div className={styles.bottom_left}>
                  <span className={styles.name}>Soham Malakar</span>
                  <br />
                  <span className={styles.role}>Design,Sponsorship</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/malakar-soham/">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/malakar-soham">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/malakar_soham">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/swastik-malakar.png"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Swastik Malakar</span>
                  <br />
                  <span className={styles.role}>Design</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/malakar-swastik">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/malakar-swastik/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/MalakarSwastik">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/sourav-dash.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Sourav Dash</span>
                  <br />
                  <span className={styles.role}>Design</span>
                </div>

                <div className={styles.bottom_right}>
                  {/* <a href="">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a> */}
                  <a href="https://www.linkedin.com/in/srv-uxd/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  {/* <a href="">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/lekhansh-ruprela.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />
                <div className={styles.bottom_left}>
                  <span className={styles.name}>Lekhansh Ruprela</span>
                  <br />
                  <span className={styles.role}>Content</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/lekhanshlkr">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/lekhansh-ruprela-a66b65193/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  <a href="https://twitter.com/lekhanshruprela">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-9">
              <div className={styles.wrapper}>
                <img
                  src="images/team/priyadarshini-acharjee.jpg"
                  alt="Team Member"
                  className={styles.member_img}
                />

                <div className={styles.bottom_left}>
                  <span className={styles.name}>Priyadarshini Acharjee </span>
                  <br />
                  <span className={styles.role}>Content</span>
                </div>

                <div className={styles.bottom_right}>
                  <a href="https://github.com/Priyadarshini-25">
                    <i className="fab fa-github fa-fw fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/priyadarshini-a-0a60861b5/">
                    <i
                      className={`fab fa-linkedin fa-fw fa-lg  ${styles.social_margin}`}
                    ></i>
                  </a>
                  {/* <a href="">
                    <i className="fab fa-twitter fa-fw fa-lg"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
