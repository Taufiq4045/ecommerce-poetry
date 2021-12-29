import React from "react";
import useStyles from "./FooterStyles";
import Github from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';


const Footer = () => {
  const classes = useStyles();
  return (
      <div className={classes.footer}>
          <h1>
            {" "}
            <a
              className={classes.anchor}
              href="https://thepoetryofryan.wordpress.com/"
            >
              thepoetryofryan.com{" "}
            </a>{" "}
          </h1>
          <h3>
            {" "}
            This website is currently made for testing purposes. Will be live
            soon!{" "}
          </h3>
          <p>
            {" "}
            You can find the{" "}
            <a
              className={classes.anchor}
              href="https://github.com/Taufiq4045/ecommerce-poetry"
            >
              {" "}
              source code{" "}
            </a>{" "}
            here 😄{" "}
          </p>
        <div className={classes.contacts}>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://github.com/Taufiq4045" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://www.linkedin.com/in/taufiq-b1929213a" target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
            <a style={{color:"inherit",textDecoration:"none"}} href="https://twitter.com/TaufiqMohd5" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
        </div>
      </div>
  );
};

export default Footer;