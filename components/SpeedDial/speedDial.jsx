import React from "react";
import styles from "./speedDial.module.css";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { FaRegHandshake } from "react-icons/fa";
import { BiGift } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    outline: "none",
  },
}));

const actions = [
  {
    icon: <BsChatDots style={{ fontSize: "1.4rem" }} />,
    name: "Contact",
    section: "#footer-section",
  },
  {
    icon: <GroupOutlinedIcon />,
    name: "Team",
    section: "#team-section",
  },
  {
    icon: <BsQuestion style={{ fontSize: "1.75rem" }} />,
    name: "Faq's",
    section: "#faq-section",
  },
  {
    icon: <BiGift style={{ fontSize: "1.5rem" }} />,
    name: "Prizes",
    section: "#prizes-section",
  },
  {
    icon: <FaRegHandshake style={{ fontSize: "1.5rem" }} />,
    name: "Sponsors",
    section: "#sponsors-section",
  },
  {
    icon: <MicNoneOutlinedIcon />,
    name: "Speakers",
    section: "#speakers-section",
  },
  {
    icon: <LibraryBooksOutlinedIcon />,
    name: "Rules",
    section: "#rules-section",
  },
  {
    icon: <CalendarTodayOutlinedIcon />,
    name: "Schedule",
    section: "#schedule-section",
  },
  { icon: <HomeOutlinedIcon />, name: "Home", section: "#landing-section" },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const style = {
    position: "fixed",
    right: 20,
    bottom: 20,
    outline: 0,
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.background}>
      <SpeedDial
        style={style}
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon className={classes.root} style={{ outline: 0 }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            href={action.section}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
