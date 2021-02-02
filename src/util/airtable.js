import Airtable from 'airtable';

const AirtableBase = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_KEY);

export default AirtableBase;