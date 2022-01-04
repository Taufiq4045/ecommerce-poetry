import React from "react";
import useStyles from "./FooterStyles";
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';


const Footer = () => {
  const classes = useStyles();
  return (
      <div className={classes.footer} >
         <h2>Need Help? Contact here</h2>
        <div className={classes.contacts}>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://www.instagram.com/taufiq4045" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://www.linkedin.com/in/taufiq-b1929213a" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://twitter.com/TaufiqMohd5" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
        </div>
        <h3>California State University, Chico - 400 West First Street - Chico, CA 95929</h3>
        <p>Copyright @ 2022 All Rights Reserved</p>
      </div>
  );
};

export default Footer;
