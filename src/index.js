import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route} from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-pro-react.css?v=1.2.0";


ReactDOM.render(
  <Router>
    <div>
      {indexRoutes.map((prop, key) => {
        if(prop.path === "/"){ 
          return <Route exact path={prop.path} key={key} component={prop.component} />;  
        } 
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </div>
  </Router>,
  document.getElementById("root")
);
