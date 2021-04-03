import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';

import StyledButton from '../../components/button/StyledButton';
import Footer from '../../components/layout/Footer';
import Phone from '../../images/phoneScreen.png';
import Check from '../../images/check.svg';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    ...theme.mixins.toolbar,
    height: "50px",
    boxShadow: "none",
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      marginLeft: 0,
      height: "51px",
    },
  },  

  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  socialSiteButtonTabsBox: {
    // backgroundColor: '#cfe8fc',
    textAlign: 'center',
    height: '121px',
  },
  socialMediaBox: {
    // backgroundColor: '#cfe8fc',
    display: 'flex',
  },
  container: {
    paddingTop: "66px",
    maxWidth: '1322px',
  },
  phoneBox: {
    maxWidth: '317px',
  },
  socialMediaContentBox: {
    flexGrow: "1",
  },
  socialMediaTextBox: {
    marginTop: "57px",
  },
  socialMediaTitle: {
    fontSize: '36px',
    fontWeight: '600',
  },
  socialMediaDesc: {
    marginTop: '32px',
    fontSize: '26px',
    width: '770px',
    fontWeight: 'light'
  },
  socialMediaDescItem: {
    fontSize: '26px',
    fontWeight: 'light'
  },
  socialMediaDescItemCheckIcon: {
    marginRight: '19px',
  },
  socialMediaCheckBox: {
    marginTop: '62px',
    fontSize: '26px',
    width: '815px',    
  },
  signUpBtnBox: {
    marginTop: '43px'
  }
}));

const StyledTabs = withStyles({
  root: {
    display: 'inline-flex',
  },
  indicator: {
    display: 'flex',
    zIndex: "1",
    justifyContent: 'center',
    height: '50px',
    borderRadius: 6,
    '& > span': {
      width: '100%',
      backgroundColor: '#646C9A',
      border: '#646C9A',
      fontSize: '16px',
      fontWeight: '600',    
      borderRadius: 6,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: 600,
    fontSize: "20px",
    zIndex: "2",
    opacity: 1,
    color: "#000",
    height: 50,
    width: 230,
    '&:focus': {
      color: "#fff"
    },
  },
}))((props) => <Tab disableRipple {...props} />);


function MarketingCampaign(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.content}>
      <Toolbar className={classes.toolbar} />
      <Container className={classes.container}>
        <Box component="div" className={classes.socialSiteButtonTabsBox}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="TikTok" />
            <StyledTab label="Facebook" />
            <StyledTab label="Instagram" />
            <StyledTab label="Twitter" />
          </StyledTabs>
        </Box>
        <Box component="div" className={classes.socialMediaBox}>
          <div className={classes.socialMediaContentBox}>
            <div className={classes.socialMediaTextBox}>
              <Typography className={classes.socialMediaTitle}>
                Promote on TikTok
              </Typography>    
              <Typography className={classes.socialMediaDesc}>
                Advertise your brand on TikTok, using real people to promote your products or services. Let users create a video based on your script and post it on their social media wall.              
              </Typography>    
                <Typography className={classes.socialMediaDescItem}>
                  <img
                    src={Check}
                    alt="check-icon"
                    className={classes.socialMediaDescItemCheckIcon}
                  />
                  Original Content Creation based on your script.
                </Typography>
                <Typography className={classes.socialMediaDescItem}>
                  <img
                    src={Check}
                    alt="check-icon"
                    className={classes.socialMediaDescItemCheckIcon}
                  />
                  Social Wall distribution of your video.
                </Typography> 
                <Typography className={classes.socialMediaDescItem}>
                  <img
                    src={Check}
                    alt="check-icon"
                    className={classes.socialMediaDescItemCheckIcon}
                  />
                  Ad Text Supported including #hashtags.
                </Typography>
                <Typography className={classes.socialMediaDescItem}>
                  <img
                    src={Check}
                    alt="check-icon"
                    className={classes.socialMediaDescItemCheckIcon}
                  />              
                  Tags Supported
                </Typography>
            </div>
            <div className={classes.signUpBtnBox}>
              <StyledButton variant={'contained'}>
                Sign Up
              </StyledButton>
            </div>
          </div>
          <div className={classes.phoneBox}>
            <img
              src={Phone}
              alt="phone"
            />
          </div>
        </Box>
      </Container>      
      <Footer />
    </div>
  );
}

export default MarketingCampaign;      