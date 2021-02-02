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

import Airtable from 'airtable';



function App(props) {
    
    const base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_KEY);
    const [state, setState] = useState({
      records: {},
      tutorials: {}
    })
    
    // useEffect(() => {  
    //   console.log('useEffect');
    //   base('Overview').select({view: 'Grid view'})
    //     .eachPage(
    //       (records, fetchNextPage) => {
    //         this.setState({
    //           records: records
    //         });
    //         console.log(records);
    //         fetchNextPage();
    //       }
    //     );
      
    // }, [])  

    base('Overview').select({
        // Selecting the first 3 records in Grid view:

        maxRecords: 500,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          console.log('recordsss: ', records);
          this.setState({
            records: records
          });
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();

      }, function done(err) {
          if (err) { console.error(err); return; }
      });
    
    useEffect(() => {  
      console.log('useEffect');
      
      
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
            <Route exact path="/" component={IndexPage} records={state.records} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/faves" component={FavesPage} />

            <Route exact path="/usecase/:type" component={UsecasePage} resources={state.resources} />

            <Route exact path="/link/:name" component={LinkPage} resources={state.resources} />

            <Route exact path="/category/:category" component={CategoryPage} resources={state.resources} />

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
