import styles from "./intro.module.css";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const DevfolioButton = withStyles({
  root: {
    width: '50%',
    height: '100%',
    color: 'white',
    borderRadius: '1',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#4383F2',
    borderColor: '#4383F2',
    '&:hover': {
      color: 'white',
      backgroundColor: '#4383F1',
      borderColor: '#4383F1',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#4383F2',
      borderColor: '#4383F2',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function Intro() {
  return (
    <>
      <div className={styles.background} id="landing-section">
        <div className={styles.header}>
          <img 
            src="/images/asjx-logo.svg"
            className={styles.logo_img_size, styles.logo_main}
          />
        </div>
        <div className={styles.header_text}>
          <img 
            src="/images/asjx_text.svg"
            className={styles.text_img_size}
          />
        </div>
        <div className="container">
            <div className="row">
              <div className={styles.title}>
                KIIT's largest android hackathon
              </div>
              <div className={styles.date}>
                26th December 2020 - 30th December 2020
              </div>
            </div>
            <div className="row">
              <div className={styles.title}>
                <DevfolioButton variant="contained" size="large" href="https://devfolio.co/home/">Register with Devfolio</DevfolioButton>
              </div>
            </div>
        </div>
        <div className={styles.logo_text}>
          <img 
            src="/images/dsc-logo.svg"
            className={styles.text_img_size}
          />
        </div>
      </div>
    </>
  );
}
