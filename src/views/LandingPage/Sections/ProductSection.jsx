import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Portrait from "@material-ui/icons/Portrait";
import Search from "@material-ui/icons/Search";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Transform from "@material-ui/icons/Transform";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";   

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>We Bring You The Best Features</h2>
            <h5 className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit sit consequatur rem optio architecto pariatur 
            dolorem laudantium. Reprehenderit sit consequatur rem optio architecto pariatur.
            Dolor sit amet consectetur adipisicing elit.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Build your profile"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={Portrait}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Top Recruiters"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={SupervisedUserCircle}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Discover"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={Search}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Showcase your Skills."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={ImportantDevices}
                iconColor="rose"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Transform your Career"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit sit consequatur rem optio architecto pariatur dolorem laudantium."
                icon={Transform}
                iconColor="gray"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
