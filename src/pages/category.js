import React, { useState, useEffect } from "react";
import ContentCardsSection from "./../components/ContentCardsSection";
import { useRouter } from "./../util/router.js";
import Airtable from './../util/airtable';
// import AirtableBase from '../util/airtable';

function CategoryPage(props) {
 
 
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const filter = {
      filterByFormula: `(Find("${router.query.category}", {Category}))`,
      maxRecords: 100,
      view: "Grid view"
    };
    Airtable.getRecords('Overview', filter, setResources);
    
  }, []);
  // console.log('Category resources ==> ', resources)

  const router = useRouter();

  return (
    <ContentCardsSection
      items={resources.filter(item => item.fields.Category.includes(router.query.category))}
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title={router.query.category}
      subtitle=""
      featuredOnly={false}
      tagValue="Use Case"
    />
  );
}

export default CategoryPage;
