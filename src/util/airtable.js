import Airtable from 'airtable';

const AirtableBase = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_KEY);

const getRecords = (table, options, setResults, singleItem) => {
    const results = [];
    console.log('options => ', options)
    AirtableBase(table).select(options).eachPage(function page(records, fetchNextPage) {
      results.push(...records)
      fetchNextPage();
    }, function done(err) {
        if (singleItem) {
          setResults(results[0])
        } else {
          setResults(results)
        }
        
        if (err) { console.error(err); return; }
    });
  }



export default getRecords;
    