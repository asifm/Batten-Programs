// Good documentation: https://flaviocopes.com/airtable/

var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
});

var base = Airtable.base('appml7E91jjekxPeY');

exports.handler = function (event, context, callback) {
  const allRecords = [];
  base('Programs')
    .select({
      maxRecords: 100,
      view: event.queryStringParameters.view,
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          allRecords.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(err);
        } else {
          const body = JSON.stringify({ records: allRecords });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public',
              'Access-Control-Allow-Origin': '*',
            },
          };
          callback(null, response);
        }
      },
    );
};
