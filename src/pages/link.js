import React, {useState} from "react";
import LinkMainSection from "./../components/LinkMainSection";
import Our2CentsSection from "./../components/Our2CentsSection";
import TutorialsSection from "./../components/TutorialsSection";
import { useRouter } from "./../util/router.js";
import AirtableBase from '../util/airtable';

function LinkPage(props) {
  const router = useRouter();

  const [state, setState] = useState({
    resource: []
  });
  
  // TBD Abstract out Airtbale functions
  var recordsProcessed = [];
  AirtableBase('Overview').select({
    maxRecords: 200,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      recordsProcessed = recordsProcessed.concat(records);
      fetchNextPage();
  
  }, function done(err) {
    setState({
      resource: recordsProcessed
    })
      if (err) { console.error(err); return; }
  });
  
  const link = state.resource.find(resource => resource.fields.Name === router.query.name);
  
  if (link) {
    return (
      <>
        <LinkMainSection
          link={link}
          items={state.resource}
          color="white"
          size="medium"
          backgroundImage=""
          backgroundImageOpacity={1}
          title={link.fields.Name}
          subtitle=""
        />
  
        {(link.fields["Review Video"] || true) && (
          <>
            <Our2CentsSection
              color="white"
              size="medium"
              backgroundImage=""
              backgroundImageOpacity={1}
              title="Our 2 cents"
              subtitle="The algorithm told us to tell you to watch it"
              embedUrl="https://www.youtube.com/embed/YTdDqYZmdKo"
            />
            <TutorialsSection
              color="white"
              size="medium"
              backgroundImage=""
              backgroundImageOpacity={1}
              title="Tutorials"
              subtitle="We watched the bad ones so you can only watch the good ones"
              embedUrl="https://www.youtube.com/embed/YTdDqYZmdKo"
            />
          </>
        )}
      </>
    );
  } else 
  {
    return (<></>);
  }
  
}

export default LinkPage;
