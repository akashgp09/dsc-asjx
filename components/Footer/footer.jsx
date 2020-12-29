import styles from "./footer.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className={styles.background} id="landing-section">
        <div className={styles.header}>
          <img 
            src="/images/dsc-logo.svg"
            className={styles.logo_img_size, styles.logo_main}
          />
        </div>
        <div className="container">
            <div className="row">
              <div className={styles.title}>
                School of Computer Engineering, KIIT University, Bhubaneswar, 751024
              </div>
              <div className={styles.date}>
                  Email: info@dsckiit.in
              </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.title}>
                    Arpit(ASJX Organiser):8336026764
                </div>
                <div className={styles.title}>
                    Pradymn(DSC Lead):9956876609
                </div>
            </div>  
            <div className="row">
            <div className={styles.social}>
                <span className={styles.space}><LinkedInIcon /></span>
                <span className={styles.space}><InstagramIcon /></span>
                <span className={styles.space}><FaDiscord /></span>
                <span className={styles.space}><FacebookIcon /></span>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
