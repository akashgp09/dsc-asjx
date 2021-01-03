import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./faq.module.css";
import { BottomNavigation } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  return (
    <>
      <div className={styles.background} id="faq-section">
        <div className={styles.header}>
          <span className={styles.half_background}>FAQ</span>
        </div>

        <div style={{ width: "70%", margin: "10px auto" }}>
          <Accordion style={{ borderRadius: "4px", padding: "0.7%" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ background: "#3ddb83", borderRadius: "50%" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className={classes.heading}>
                When and Where is the hackathon being conducted?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                The hackathon will be conducted online from 11th to 22nd Jan
                2021.
              </span>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ borderRadius: "4px", padding: "0.7%" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ background: "#3ddb83", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className={classes.heading}>
                How are we supposed to submit the project?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                The project submissions will be done on DevFolio. Join our{" "}
                <a href="https://discord.gg/4mwRt8SxCm">discord</a> to know
                more.
              </span>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ borderRadius: "4px", padding: "0.7%" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ background: "#3ddb83", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className={classes.heading}>How much does it cost?</span>
            </AccordionSummary>
            <AccordionDetails>
              <span className={styles.gif}>
                <img src="/images/meme.gif" className={styles.gif} />
              </span>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ borderRadius: "4px", padding: "0.7%" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ background: "#3ddb83", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className={classes.heading}>
                Can the team members be from different colleges?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <span>Yes.</span>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ borderRadius: "4px", padding: "0.7%" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ background: "#3ddb83", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className={classes.heading}>Who all can attend ASJX?</span>
            </AccordionSummary>
            <AccordionDetails>
              <span>
                You just need to be in your college’s undergraduate program.
              </span>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
