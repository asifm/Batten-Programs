// import tailwind from '../tailwind.config.js';
import newColors from '../colors';
import { stringifyArr } from './helpers';

const endpoint =
  'https://batten-programs.netlify.app/.netlify/functions/getdata?view=Web';

let apiRecords;

export let dataPromise = fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    apiRecords = data.records.map(record => record.fields);
    return parseData(apiRecords);
  });

const colorScheme = {
  // Learn: tailwind.theme.extend.colors.learn,
  // Experience: tailwind.theme.extend.colors.experience,
  // Connect: tailwind.theme.extend.colors.connect,
  Learn: newColors.learn,
  Experience: newColors.experience,
  Connect: newColors.connect,
};

function parseData() {
  let output = [];

  apiRecords.forEach(record => {
    if (record.hasOwnProperty('Start') && record.hasOwnProperty('End')) {
      if (record.Start && record.End) {
        // console.log(record);
        output.push({
          start: Date.parse(record.Start),
          end: Date.parse(record.End),
          name: record['Program Name'],
          theme: record.Theme,
          color: colorScheme[record.Theme],
          link: record.URL,
          contact: stringifyArr(record, 'Name'),
          audience: stringifyArr(record, 'Audience'),
          mode: stringifyArr(record, 'Mode'),
          description: record.Description,
        });
      }
    }
  });

  return output;
}
