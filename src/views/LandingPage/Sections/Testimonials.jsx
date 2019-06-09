import React from "react";
// react component for creating beautiful carousel
//NONE

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

// Styles
import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";

// Images
import camp from "assets/img/faces/camp.jpg";
import test1 from "assets/img/assets-for-demo/test1.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";

function Testimonials({ ...props }) {
    const { classes, ...rest } = props;
    return (
      <div className="cd-section" {...rest}>
        {/* Testimonials 1 START */}
        <div
          className={`${classes.testimonials}`}
        //   style={{ 
        //     //   backgroundImage: `url(${dg2})`,
        //     //   backgroundSize: "cover",
        //     //   backgroundRepeat: "no-repeat",
        //     //   textAlign: "center"
        //     } }
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                }`}
              >
                <h2 className={classes.title}>What Users Say About Us</h2>
                <h5 className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card testimonial className={classes.card1} raised>
                  <div className={`${classes.icon} ${classes.textCenter}`}>
                    <FormatQuote />
                  </div>
                  <CardBody>
                    <h5 className={`${classes.cardDescription} ${classes.textCenter}`}>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi."
                    </h5>
                    <h4 className={`${classes.cardTitle} ${classes.textCenter}`}>Kristen Steward</h4>
                    <h6 className={`${classes.cardCategory} ${classes.textCenter}`}>@KRISTENST</h6>
                  </CardBody>
                  <CardFooter testimonial>
                    <CardAvatar testimonial testimonialFooter>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={camp} alt="..." />
                      </a>
                    </CardAvatar>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card testimonial className={classes.card1} raised>
                  <div className={`${classes.icon} ${classes.textCenter}`} >
                    <FormatQuote />
                  </div>
                  <CardBody>
                    <h5 className={`${classes.cardDescription} ${classes.textCenter}`}>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation laboris nisi."
                    </h5>
  
                    <h4 className={`${classes.cardTitle} ${classes.textCenter}`}>Gina Andrew</h4>
                    <h6 className={`${classes.cardCategory} ${classes.textCenter}`}>@GINAANDREW</h6>
                  </CardBody>
                  <CardFooter testimonial>
                    <CardAvatar testimonial testimonialFooter>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </a>
                    </CardAvatar>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card testimonial className={classes.card1} raised>
                  <div className={`${classes.icon} ${classes.textCenter}`}>
                    <FormatQuote />
                  </div>
                  <CardBody>
                    <h5 className={`${classes.cardDescription} ${classes.textCenter}`}>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi."
                    </h5>
                    <h4 className={`${classes.cardTitle} ${classes.textCenter}`}>George West</h4>
                    <h6 className={`${classes.cardCategory} ${classes.textCenter}`}>@GEORGEWEST</h6>
                  </CardBody>
                  <CardFooter testimonial>
                    <CardAvatar testimonial testimonialFooter>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={test1} alt="..." />
                      </a>
                    </CardAvatar>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* END OF TESTIMONIALS */}
      </div>
    );
}

export default withStyles(testimonialsStyle)(Testimonials);