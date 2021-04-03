import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import Logo from "../logo/Logo";
import Links from "../navTab/NavTab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }
}));


function Header({onDrawerToggle}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.headerToolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.logoContainer}>
          <Logo />
          <Links />
        </div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  variant: PropTypes.func
};

export default Header;