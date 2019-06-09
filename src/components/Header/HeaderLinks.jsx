/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";


function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to="/signup-page">
          <Button
            className={classes.navLink}
            // onClick={e => e.preventDefault()}
            color="transparent"
            style={{color:"white"}}
          >
            Join Now
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/login-page">
          <Button
            className={classes.registerNavLink}
            // onClick={e => e.preventDefault()}
            color="danger"
            round
          >
            Log In
          </Button>
        </NavLink>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
