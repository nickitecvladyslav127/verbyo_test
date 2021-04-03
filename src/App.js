import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/layout/Header';
import NavLink from './components/navLink/NavLink';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import MarketingCampeign from './containers/marketingCampaign/MarketingCampaign';
import SocialMediaPlatfrom from './containers/socialMediaPlatform/SocialMediaPlatform';
import VerbyoApp from './containers/verbyoApp/VerbyoApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#F8F9F8',
  },
  // pageContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   width: '100%'
  // }
}));

function App(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onDrawerToggle={handleDrawerToggle} />
      <NavLink onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        <Switch>
          <Route exact path="/marketingCampaign" component={MarketingCampeign} />
          <Route exact path="/socialMediaPlatfrom" component={SocialMediaPlatfrom} />
          <Route exact path="/verbyoApp" component={VerbyoApp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={MarketingCampeign} />
        </Switch>
    </div>
  );
}

export default App;
