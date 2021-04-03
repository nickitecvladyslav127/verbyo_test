import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LogoIcon from "../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: '127px',
		height: '63px',
		position: 'relative',
	},
	logoText: {
		fontStyle: 'italic',
		position: 'absolute',
		bottom: '0px',
		right: '0px',
		fontSize: '16px',
		fontWeight: '600',
		color: "#2F2651"
	},
	logoIcon: {
		position: 'absolute',
		bottom: '16px',
		right: '32px'		
	}
}));

function Logo(props) {
  const classes = useStyles();

  return (
  	<div className={classes.root}>
		  <img
		    src={LogoIcon}
		    alt="logo-icon"
		    className={classes.logoIcon}
		  />
		  <Typography className={classes.logoText}>
		  	Business
		  </Typography>
  	</div>
  );
}

export default Logo;      
