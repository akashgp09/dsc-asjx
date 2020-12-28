import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar__wrapper}>
      <ul className={styles.sidebar__nav}>
        {/* <li className={`${styles.sidebar__item}  ${styles.sidebar__logo}`}>
       <a href="#landing-section" className={styles.sidebar__item__link}>
       <img
          src="/images/dsc-logo.svg"
          alt="DSC KIIT"
          className={styles.sidebar__logo__img}
          />
       </a>
       <span className={styles.sidebar__text}>Home</span>
       </li> */}
        <li className={styles.sidebar__item}>
          <a href="#landing-section" className={styles.sidebar__item__link}>
            <i alt="home">
              <svg
                width="30"
                height="33"
                viewBox="0 0 46 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.6955 21.2158L25.4017 1.93202L24.1085 0.638782C23.8138 0.346063 23.4154 0.181778 23 0.181778C22.5847 0.181778 22.1862 0.346063 21.8915 0.638782L1.30453 21.2158C1.0026 21.5165 0.763973 21.8747 0.602746 22.2692C0.441518 22.6637 0.360954 23.0865 0.365808 23.5127C0.38578 25.2703 1.84879 26.6734 3.6064 26.6734H5.72851V42.9362H40.2715V26.6734H42.4386C43.2924 26.6734 44.0963 26.3388 44.7005 25.7346C44.998 25.4381 45.2337 25.0855 45.394 24.6972C45.5542 24.309 45.6359 23.8928 45.6342 23.4727C45.6342 22.6239 45.2997 21.82 44.6955 21.2158ZM25.7962 39.3411H20.2038V29.155H25.7962V39.3411ZM36.6764 23.0783V39.3411H28.9919V27.9566C28.9919 26.8531 28.0981 25.9593 26.9946 25.9593H19.0054C17.9019 25.9593 17.0082 26.8531 17.0082 27.9566V39.3411H9.32362V23.0783H4.53014L23.005 4.61837L24.1584 5.7718L41.4749 23.0783H36.6764Z"
                  fill="#3DDB83"
                />
              </svg>
            </i>
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="#schedule-section" className={styles.sidebar__item__link}>
            <i alt="timeline">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3703 4.42727H29.5502V2.51722C29.5502 2.01065 29.349 1.52482 28.9908 1.16662C28.6326 0.808414 28.1467 0.607178 27.6402 0.607178C27.1336 0.607178 26.6478 0.808414 26.2896 1.16662C25.9314 1.52482 25.7301 2.01065 25.7301 2.51722V4.42727H14.2699V2.51722C14.2699 2.01065 14.0686 1.52482 13.7104 1.16662C13.3522 0.808414 12.8664 0.607178 12.3598 0.607178C11.8532 0.607178 11.3674 0.808414 11.0092 1.16662C10.651 1.52482 10.4498 2.01065 10.4498 2.51722V4.42727H6.62967C5.10994 4.42727 3.65246 5.03098 2.57785 6.10559C1.50325 7.18019 0.899536 8.63768 0.899536 10.1574V33.0779C0.899536 34.5977 1.50325 36.0551 2.57785 37.1298C3.65246 38.2044 5.10994 38.8081 6.62967 38.8081H33.3703C34.89 38.8081 36.3475 38.2044 37.4221 37.1298C38.4967 36.0551 39.1004 34.5977 39.1004 33.0779V10.1574C39.1004 8.63768 38.4967 7.18019 37.4221 6.10559C36.3475 5.03098 34.89 4.42727 33.3703 4.42727ZM35.2803 33.0779C35.2803 33.5845 35.0791 34.0703 34.7209 34.4285C34.3627 34.7868 33.8769 34.988 33.3703 34.988H6.62967C6.1231 34.988 5.63727 34.7868 5.27907 34.4285C4.92086 34.0703 4.71963 33.5845 4.71963 33.0779V19.7076H35.2803V33.0779ZM35.2803 15.8875H4.71963V10.1574C4.71963 9.65083 4.92086 9.165 5.27907 8.8068C5.63727 8.44859 6.1231 8.24736 6.62967 8.24736H10.4498V10.1574C10.4498 10.664 10.651 11.1498 11.0092 11.508C11.3674 11.8662 11.8532 12.0674 12.3598 12.0674C12.8664 12.0674 13.3522 11.8662 13.7104 11.508C14.0686 11.1498 14.2699 10.664 14.2699 10.1574V8.24736H25.7301V10.1574C25.7301 10.664 25.9314 11.1498 26.2896 11.508C26.6478 11.8662 27.1336 12.0674 27.6402 12.0674C28.1467 12.0674 28.6326 11.8662 28.9908 11.508C29.349 11.1498 29.5502 10.664 29.5502 10.1574V8.24736H33.3703C33.8769 8.24736 34.3627 8.44859 34.7209 8.8068C35.0791 9.165 35.2803 9.65083 35.2803 10.1574V15.8875Z"
                  fill="#E5E5E5"
                />
              </svg>
            </i>
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="#speakers-section" className={styles.sidebar__item__link}>
            <i alt="rules">
              <svg
                width="30"
                height="27"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7009 4.38606V22.5682H22.5997V32.6694H4.41755V4.38606H32.7009ZM32.7009 0.345581H4.41755C2.19529 0.345581 0.377075 2.1638 0.377075 4.38606V32.6694C0.377075 34.8917 2.19529 36.7099 4.41755 36.7099H24.62L36.7414 24.5885V4.38606C36.7414 2.1638 34.9232 0.345581 32.7009 0.345581ZM18.5592 22.5682H8.45803V18.5277H18.5592V22.5682ZM28.6604 14.4873H8.45803V10.4468H28.6604V14.4873Z"
                  fill="#E5E5E5"
                />
              </svg>
            </i>
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="#speakers-section" className={styles.sidebar__item__link}>
            <i alt="speaker">
              <svg
                width="30"
                height="38"
                viewBox="0 0 46 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.2841 33.9955C42.2841 33.9955 45.039 33.9955 45.039 31.2406C45.039 28.4858 42.2841 20.2211 31.2647 20.2211C20.2452 20.2211 17.4903 28.4858 17.4903 31.2406C17.4903 33.9955 20.2452 33.9955 20.2452 33.9955H42.2841ZM20.2589 31.3949V31.3894V31.3949ZM20.3058 31.2406H42.2235C42.2364 31.2391 42.2493 31.2373 42.2621 31.2351L42.2841 31.2296C42.2786 30.5023 41.8241 28.3921 40.1904 26.4912C38.6698 24.7088 35.9975 22.976 31.2647 22.976C26.5345 22.976 23.8623 24.7116 22.3389 26.4912C20.7052 28.3921 20.2479 30.5051 20.2452 31.2296C20.2653 31.2335 20.2855 31.2372 20.3058 31.2406ZM42.2704 31.3949V31.3894V31.3949ZM31.2647 14.7114C32.7259 14.7114 34.1274 14.1309 35.1606 13.0976C36.1939 12.0644 36.7744 10.6629 36.7744 9.20166C36.7744 7.74038 36.1939 6.33896 35.1606 5.30568C34.1274 4.2724 32.7259 3.69191 31.2647 3.69191C29.8034 3.69191 28.402 4.2724 27.3687 5.30568C26.3354 6.33896 25.7549 7.74038 25.7549 9.20166C25.7549 10.6629 26.3354 12.0644 27.3687 13.0976C28.402 14.1309 29.8034 14.7114 31.2647 14.7114ZM39.5293 9.20166C39.5293 10.287 39.3155 11.3617 38.9002 12.3644C38.4848 13.3671 37.8761 14.2782 37.1086 15.0456C36.3412 15.8131 35.4301 16.4218 34.4274 16.8372C33.4247 17.2525 32.35 17.4663 31.2647 17.4663C30.1793 17.4663 29.1046 17.2525 28.1019 16.8372C27.0992 16.4218 26.1881 15.8131 25.4207 15.0456C24.6532 14.2782 24.0445 13.3671 23.6291 12.3644C23.2138 11.3617 23 10.287 23 9.20166C23 7.00975 23.8708 4.90761 25.4207 3.35769C26.9706 1.80778 29.0727 0.937042 31.2647 0.937042C33.4566 0.937042 35.5587 1.80778 37.1086 3.35769C38.6585 4.90761 39.5293 7.00975 39.5293 9.20166ZM20.0689 20.9925C18.9669 20.6455 17.8309 20.4174 16.6804 20.3121C16.0339 20.2506 15.3848 20.2202 14.7354 20.2211C3.71593 20.2211 0.96106 28.4858 0.96106 31.2406C0.96106 33.0781 1.87843 33.9955 3.71593 33.9955H15.3305C14.9221 33.1355 14.7184 32.1926 14.7354 31.2406C14.7354 28.4582 15.774 25.6152 17.7382 23.2405C18.4077 22.4306 19.1873 21.673 20.0689 20.9925ZM14.515 22.976C9.91991 23.0311 7.31104 24.7391 5.80964 26.4912C4.16498 28.4031 3.71593 30.5216 3.71593 31.2406H11.9805C11.9805 28.3618 12.8704 25.494 14.515 22.976ZM5.09337 10.5791C5.09337 8.38718 5.9641 6.28505 7.51402 4.73513C9.06394 3.18521 11.1661 2.31448 13.358 2.31448C15.5499 2.31448 17.652 3.18521 19.202 4.73513C20.7519 6.28505 21.6226 8.38718 21.6226 10.5791C21.6226 12.771 20.7519 14.8731 19.202 16.4231C17.652 17.973 15.5499 18.8437 13.358 18.8437C11.1661 18.8437 9.06394 17.973 7.51402 16.4231C5.9641 14.8731 5.09337 12.771 5.09337 10.5791ZM13.358 5.06935C11.8967 5.06935 10.4953 5.64984 9.46201 6.68312C8.42873 7.7164 7.84824 9.11782 7.84824 10.5791C7.84824 12.0404 8.42873 13.4418 9.46201 14.4751C10.4953 15.5084 11.8967 16.0888 13.358 16.0888C14.8193 16.0888 16.2207 15.5084 17.254 14.4751C18.2872 13.4418 18.8677 12.0404 18.8677 10.5791C18.8677 9.11782 18.2872 7.7164 17.254 6.68312C16.2207 5.64984 14.8193 5.06935 13.358 5.06935Z"
                  fill="#E5E5E5"
                />
              </svg>
            </i>
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="#sponsors-section" className={styles.sidebar__item__link}>
            <i alt="sponsors">
              <svg
                width="30"
                height="38"
                viewBox="0 0 51 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.7656 12.2082L44.9384 2.96394C44.5546 2.23683 43.902 1.6883 43.1198 1.43514C42.3375 1.18199 41.4873 1.24423 40.7503 1.6086L36.1808 3.89335H32.9642L26.4874 0.962428C25.8044 0.653673 25.0335 0.599166 24.3138 0.808737L14.7602 3.59402L10.3683 1.39818C9.63121 1.03406 8.78109 0.971952 7.99886 1.22508C7.21664 1.47821 6.56407 2.02659 6.18001 2.75353L1.35279 11.9979C1.15978 12.3676 1.04234 12.7721 1.00731 13.1876C0.972286 13.6032 1.02037 14.0216 1.14877 14.4184C1.27716 14.8152 1.48329 15.1824 1.75513 15.4987C2.02698 15.8149 2.35908 16.0739 2.73208 16.2605L7.44291 18.6159L18.0478 26.9085C18.394 27.18 18.7938 27.3752 19.2208 27.4813L30.5968 30.3254C30.8437 30.3871 31.0971 30.4182 31.3516 30.4181C32.1864 30.4182 32.9873 30.0879 33.5794 29.4995L40.8021 22.2766C40.8099 22.2689 40.8166 22.2605 40.8241 22.2528L40.8533 22.2214C40.8639 22.2097 40.8749 22.1987 40.8853 22.1867L43.8192 18.7545L48.3863 16.4709C48.7593 16.2843 49.0914 16.0253 49.3633 15.709C49.6351 15.3928 49.8413 15.0255 49.9696 14.6287C50.098 14.2319 50.1461 13.8135 50.1111 13.3979C50.0761 12.9823 49.9586 12.5779 49.7656 12.2082ZM39.4412 19.0426L31.9787 13.6153C31.7071 13.4178 31.3794 13.3125 31.0436 13.315C30.7078 13.3174 30.3816 13.4275 30.113 13.6291L27.6006 15.5134C26.7836 16.1212 25.7924 16.4495 24.7741 16.4495C23.7558 16.4495 22.7646 16.1212 21.9476 15.5134L20.8837 14.7153L28.5651 7.03371H32.6172L32.6245 7.0341L32.6298 7.03371H35.5996L40.9491 17.2786L39.4412 19.0426ZM8.96412 4.20701L12.4356 5.94295L7.60838 15.1872L4.13669 13.4514L8.96412 4.20701ZM31.3586 27.2787L19.9826 24.4345L10.2831 16.8501L15.6292 6.61189L25.1929 3.82387L26.7043 4.50772C26.5769 4.60046 26.4566 4.70255 26.3443 4.81314L18.6627 12.4947C18.3446 12.8129 18.0985 13.1957 17.9412 13.6173C17.7839 14.0388 17.719 14.4892 17.7509 14.938C17.7828 15.3868 17.9108 15.8235 18.1261 16.2186C18.3415 16.6136 18.6392 16.9578 18.9992 17.2278L20.0632 18.0255C21.4249 19.0386 23.0769 19.5857 24.7741 19.5857C26.4713 19.5857 28.1232 19.0386 29.4849 18.0255L31.0695 16.8371L37.2819 21.3552L31.3586 27.2787ZM46.9817 13.6618L43.51 15.3978L38.6828 6.15318L42.1545 4.41763L46.9835 13.6609L46.9817 13.6618ZM23.9418 33.3243C23.892 33.5244 23.8033 33.7128 23.6806 33.8786C23.5579 34.0444 23.4037 34.1843 23.2268 34.2905C23.05 34.3966 22.8539 34.4668 22.6499 34.497C22.4459 34.5272 22.2379 34.5169 22.0379 34.4666L16.1218 32.9878C15.6419 32.8671 15.197 32.6354 14.823 32.3112L10.3966 28.4635C10.0842 28.1897 9.89301 27.8034 9.86485 27.389C9.83668 26.9746 9.97385 26.5659 10.2463 26.2524C10.5188 25.9389 10.9044 25.7461 11.3187 25.7163C11.733 25.6864 12.1422 25.8219 12.4568 26.0931L16.8836 29.9409L22.7996 31.4201C23.2036 31.5211 23.5509 31.7784 23.7651 32.1355C23.9794 32.4926 24.043 32.9201 23.942 33.3241L23.9418 33.3243Z"
                  fill="#E5E5E5"
                />
              </svg>
            </i>
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="#faq-section" className={styles.sidebar__item__link}>
            <i alt="faq">
              <svg
                width="30"
                height="25"
                viewBox="0 0 19 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.55927 0.51123C7.22239 0.514195 4.98208 1.44383 3.32965 3.09625C1.67723 4.74868 0.747593 6.98899 0.744629 9.32587H5.22589C5.22589 6.93512 7.17076 4.99249 9.55927 4.99249C11.9478 4.99249 13.8927 6.93512 13.8927 9.32587C13.8927 10.6658 12.8149 11.6382 11.168 12.9691C10.63 13.3906 10.1133 13.8385 9.61977 14.3113C7.38362 16.5452 7.31864 18.918 7.31864 19.1824V20.6769H11.7999L11.7977 19.2586C11.7999 19.2227 11.8716 18.3937 12.7858 17.4818C13.1219 17.1457 13.5454 16.8096 13.9845 16.4556C15.73 15.0417 18.3717 12.9064 18.3717 9.32587C18.3699 6.98901 17.4409 4.74835 15.7887 3.09574C14.1366 1.44312 11.8961 0.513604 9.55927 0.51123ZM7.31864 22.9175H11.7999V27.3988H7.31864V22.9175Z"
                  fill="#E5E5E5"
                />
              </svg>
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
