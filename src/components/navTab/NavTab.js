import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  navLinkBox: {
    '& > * + *': {
      marginLeft: "53px",
    },
    display: "flex",
    alignItems: "center",
  },
  tab: {
    color: '#52575D',
    fontSize: '16px',
    fontWeight: 600,
  }
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.navLinkBox}>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        Home
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        Social Media Platforms
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        Marketing Campaigns
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        FAQ's
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        VerbyoApp
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        Log In
      </Link>
      <Link href="#" className={classes.tab} onClick={preventDefault}>
        Sign Up
      </Link>
    </Typography>
  );
}