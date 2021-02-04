import React, { useState, useEffect } from "react";
import CategoryContentCardsSection from "./../components/CategoryContentCardsSection";
import { useRouter } from "./../util/router.js";
import getRecords from './../util/airtable';
// import AirtableBase from '../util/airtable';

function CategoryPage(props) {
 
 
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const filter = {
      filterByFormula: `(Find("${router.query.category}", {Category}))`,
      maxRecords: 100,
      view: "Grid view"
    };
    getRecords('Overview', filter, setResources);
    
  }, []);
  console.log('Category resources ==> ', resources)

  const router = useRouter();

  return (
    <CategoryContentCardsSection
      items={resources}
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title={router.query.category}
      subtitle=""
    />
  );
}

export default CategoryPage;
