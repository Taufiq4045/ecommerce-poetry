import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
//import PersonAddIcon from "@material-ui/icons/Login";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.jpg";
import useStyles from "./NavStyles";

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const user = null;

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/login"
          aria-label="Show login screen"
          color="inherit"
        >
          <Badge color="secondary">
          <Button color='primary' variant="contained">Login</Button>
          </Badge>
        </IconButton>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="thepoetryofryan e-store"
              height="60px"
              className={classes.image}
            />{" "}
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <Button  variant="contained" component={Link} to="/about">About Ryan</Button>

              {user ? (
                <div className={classes.profile}>
                  <Avatar
                    className={classes.purple}
                    alt={user.result.name}
                    src={user.result.imageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {user.result.name}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    color="secondary"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <IconButton
                  component={Link}
                  to="/login"
                  aria-label="Show login screen"
                  color="inherit"
                >
                  <Badge color="secondary">
                  <Button color='primary' variant="contained">Login</Button>
                  </Badge>
                </IconButton>
              )}

              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
