import React, { useState, useEffect } from "react";
import ContentCardsSection from "./../components/ContentCardsSection";
import VideoListSection from "./../components/VideoListSection";
import { useRouter } from "./../util/router.js";
import Airtable from './../util/airtable';
// import AirtableBase from '../util/airtable';

function AppsPage(props) {
  const [resources, setResources] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  
  useEffect(() => {
    const filter = {
      filterByFormula: `(Find("${router.query.name}", {App}))`,
      maxRecords: 100,
      view: "Grid view"
    };
    Airtable.getRecords('Overview', filter, setResources);
    const tutorialFilter = {
      filterByFormula: `(Find("${router.query.name}", {App}))`,
      maxRecords: 6,
      view: "Grid view"
    };
    Airtable.getRecords('Tutorials', tutorialFilter, setTutorials);
    
    
  }, []);
  

  const router = useRouter();

  return (
    <>
      <ContentCardsSection
        items={resources}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title={router.query.name}
        subtitle=""
        tagValue="Categories"
      />
      <VideoListSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Tutorials"
        subtitle="We watched the bad ones so you can only watch the good ones"
        videos={tutorials}
      />
    </>

  );
}

export default AppsPage;
