import Airtable from 'airtable';

const AirtableBase = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_KEY);

const getRecords = (table, options, setResults, singleItem) => {
    const results = [];
    // console.log('options => ', options)
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

const postRecord = (table, data) => {
  AirtableBase(table).create(
    data
  , function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    // records.forEach(function (record) {
    //   // console.log(record.getId());
    // });
  });

}



export default { getRecords, postRecord };
    