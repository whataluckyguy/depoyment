import React from "react";
import Logo from "../Assets/logo.png";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { Call, WhatsApp } from "@material-ui/icons";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    maxWidth: 150,
  },
  contact: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "auto",
    padding: 20,
    
  },
  bar:{
display:'flex',
flexWrap:'wrap',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" color="inherit" >
          <Toolbar className={classes.bar}>
            <Link to='/'>
            <img src={Logo} alt="logo" className={classes.logo} />
            </Link>
            <div className={classes.contact}>
                <div>We are under build process!!</div>
              <div>
                <span><Call /></span>
              </div>
              <div>
                <span><WhatsApp /></span>
              </div>
              <div>9999072200</div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
