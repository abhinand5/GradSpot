import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/marc.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/card-profile2-square.jpg";
import team4 from "assets/img/faces/card-profile1-square.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Meet Our Team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Abhinand
                  <br />
                  <small className={classes.smallTitle}>Full Stack Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    simple
                    color="twitter"
                    // className={classes.margin5}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                  <Button
                    simple
                    color="linkedin"
                    // className={classes.margin5}
                  >
                    <i className={" fab fa-linkedin"} />
                  </Button>
                  <Button
                    simple
                    color="github"
                    // className={classes.margin5}
                  >
                    <i className={"fab fa-github"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Abdul Rasheeth
                  <br />
                  <small className={classes.smallTitle}>Front-end Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    simple
                    color="instagram"
                    className={classes.margin5}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                  <Button
                    simple
                    color="linkedin"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-linkedin"} />
                  </Button>
                  <Button
                    simple
                    color="github"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-github"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Hariharan Srikrishnan 
                  <br />
                  <small className={classes.smallTitle}>Front-end Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    simple
                    color="google"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-google"} />
                  </Button>
                  <Button
                    simple
                    color="linkedin"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-linkedin"} />
                  </Button>
                  <Button
                    simple
                    color="github"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-github"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                  <img src={team4} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Ashwin Balaji
                  <br />
                  <small className={classes.smallTitle}>Back-End Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    simple
                    color="facebook"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-facebook"} />
                  </Button>
                  <Button
                    simple
                    color="linkedin"
                    className={classes.margin5}
                  >
                    <i className={" fab fa-linkedin"} />
                  </Button>
                  <Button
                    simple
                    color="github"
                    className={classes.margin5}
                  >
                    <i className={"fab fa-github"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
