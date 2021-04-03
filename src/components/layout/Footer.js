import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Twitter from "../../images/twitter.svg";
import Tiktok from "../../images/tiktok.svg";
import Instagram from "../../images/instagram.svg";
import Logo from "../logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    paddingTop: '80px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "135px",
      paddingRight: "135px"
    },
  },
  appBar: {
    height: "50px",
    backgroundColor: "#F8F9F8",
    boxShadow: "none",
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      marginLeft: 0,
      height: "75px",
    },
  },  
  headerToolbar: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "135px",
      paddingRight: "135px"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: "#494E6D"
  },  
  footerContent: {
    display: 'flex',
  },
  logoBox: {
    display: "flex",
    width: "50%"
  },
  contactUsBox: {
    display: "flex",
    width: "50%",
    justifyContent: 'flex-end',
    fontStyle: 'italic',    
    alignItems: 'center',
  },
  logo: {
    marginLeft: '30px'
  },
  contactUsBoxItem: {
    marginLeft: '25px',
    color: '#A19DAF',
    fontSize: '14px',
  }
}));


function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.footerContent}>
        <div className={classes.logoBox}>
          <Logo />
          <img
            src={Instagram}
            alt="logo-icon"
            className={classes.logo}
          />
          <img
            src={Twitter}
            alt="logo-icon"
            className={classes.logo}
          />
          <img
            src={Tiktok}
            alt="logo-icon"
            className={classes.logo}
          />
        </div>
        <div className={classes.contactUsBox}>
          <Typography className={classes.contactUsBoxItem}>
            Terms & Conditions
          </Typography>
          <Typography className={classes.contactUsBoxItem}>
            Privacy Policy
          </Typography>
          <Typography className={classes.contactUsBoxItem}>
            GDPR
          </Typography>
          <Typography className={classes.contactUsBoxItem}>
            Contact Us
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Footer;