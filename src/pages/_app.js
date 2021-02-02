import React, { useState, useEffect } from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import AuthPage from "./auth";
import FavesPage from "./faves";
import UsecasePage from "./usecase";
import LinkPage from "./link";
import CategoryPage from "./category";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";

function App(props) {
    const {state, setState} = useState({
      resources: [],
      tutorials: []
    })

    useEffect(() => {
      fetch('https://api.airtable.com/v0/' + process.env.AIRTABLE_BASE_KEY + '/' + 'Overview' + '?api_key=' + process.env.AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          console.log(res.records)
          this.setState({ resources: res.records })
        })
        .catch(error => console.log(error))
      return () => {
        
      }
    }, [])

  return (
    <AuthProvider>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/faves" component={FavesPage} />

            <Route exact path="/usecase/:type" component={UsecasePage} />

            <Route exact path="/link/:name" component={LinkPage} />

            <Route exact path="/category/:category" component={CategoryPage} />

            <Route
              exact
              path="/firebase-action"
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            color="light"
            size="normal"
            backgroundImage=""
            backgroundImageOpacity={1}
            copyright="© 2021"
            logo=""
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
