import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Testimonals from "./Sections/Testimonials.jsx";

// Router
import { Link } from "react-router-dom";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div id="navbar" className={classes.navigation}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="GradSpot"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bg8.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Welcome to your professional community.</h1>
                <h4>
                  Join your colleagues, classmates and friends on GradSpot.
                </h4>
                <br />
                <Link to="/signup-page">
                  <Button
                    color="danger"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Button> 
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <Testimonals />
            <TeamSection />
            <WorkSection />            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
