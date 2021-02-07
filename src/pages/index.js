import React, {useState, useEffect, useContext } from "react";
import HeroSection from "./../components/HeroSection";
import Categories from "./../components/Categories";
import UseCases from "./../components/UseCases";
import SuperHacks from "./../components/SuperHacks";
import NewsletterSection from "./../components/NewsletterSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import AppSection from "./../components/AppSection";
import UsersSection from "./../components/UsersSection";
import Airtable from '../util/airtable';
import { Link } from "./../util/router.js";

function IndexPage(props) {
  const [resources, setResources] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [apps, setApps] = useState([]);


  useEffect(() => {
      // filterByFormula: 'OR(Find("Subscription", {Cost}),Find("One-Time Fee", {Cost}))', 
      // filterByFormula: '{Rating}>3',
    const resourcesFilter = {
      maxRecords: 300,
      view: "Grid view"
    };
    Airtable.getRecords('Overview', resourcesFilter, setResources);
    
    const tutorialFilter = {
      filterByFormula: `({Featured} = "true")`,
      maxRecords: 3,
      view: "Grid view"
    };
    Airtable.getRecords('Tutorials', tutorialFilter, setTutorials);
    
    const appFilter = {
      // filterByFormula: `({Featured} = "checked")`,
      maxRecords: 3,
      view: "Grid view"
    };

    Airtable.getRecords('AppTypes', appFilter, setApps);

    // console.log('apps', apps);
  }, []);

  
  
  return (
    <>
      <HeroSection
        items={resources}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Everything you need to succeed as a creator"
        subtitle="A massive compilation of resources to give fuel to your journey as a creator or entrepreneur."
        image="https://dl.airtable.com/.attachments/ca643f9a5257c1fd19297bf55123bde8/d9aabd5d/undraw_video_influencer_9oyy.svg"
        buttonText="Roll the dice"
        buttonColor="primary"
        buttonInverted={false} 
        buttonPath={resources.length ? '/link/' + resources[Math.floor(Math.random() * Math.floor(resources.length)) - 1].fields.Name : '/'}
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Cool stuff right in your box"
        subtitle="We'll send you the coolest content and tools from around the web to your inbox.  That first line didn't sound right."
        buttonText="Subscribe"
        buttonColor="warning"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <ContentCardsSection
        items={resources.filter(item => item.fields.Featured)}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Featured Picks"
        subtitle=""
        tagValue="Use Case"
      />
      <AppSection
        items={apps}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
      />
      <Categories
        items={resources}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Top Picks by Category"
        subtitle="Find some cool resources for your next project."
      />
      {/* <UseCases
        items={resources}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Use Cases"
        subtitle="Find help for a specific problem."
      /> */}
      {/* <SuperHacks
        items={resources}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Learn new superhacks"
        subtitle="'cause its 2021 and regular hacks don't cut it anymore."
      /> */}
      
      <UsersSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Join other creators and entrepreneurs"
        subtitle=""
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Cool stuff right in your inbox"
        subtitle="We'll send you the coolest content and tools from around the web to your inbox. See, we even learn from out mistakes."
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      {/* <Link to={"/app/Premiere Pro"}>FIGMA</Link> */}
      {/* <Link to={"/app/Sketch"}>Sketch</Link> */}
    </>
  );
}

export default IndexPage;
