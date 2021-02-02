import React, { useState } from "react";
import CategoryContentCardsSection from "./../components/CategoryContentCardsSection";
import { useRouter } from "./../util/router.js";
import AirtableBase from '../util/airtable';

function CategoryPage(props) {

  const [state, setState] = useState({
    records: []
  });
  
  // TBD Abstract out Airtbale functions
  var recordsProcessed = [];
  AirtableBase('Overview').select({
    maxRecords: 500,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      recordsProcessed = recordsProcessed.concat(records);
      fetchNextPage();
  
  }, function done(err) {
    setState({
      records: recordsProcessed
    })
    if (err) { console.error(err); return; }
  });

  
  const router = useRouter();

  return (
    <CategoryContentCardsSection
      items={state.records}
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
