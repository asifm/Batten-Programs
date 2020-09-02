// todo: add a boolean field on airtable: "show on web" to mark records for display
import { customColors } from './colors';
import { stringifyArr } from '../helpers';

const endpoint =
  'https://batten-programs.netlify.app/.netlify/functions/getdata?view=Web';

let monthsArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
let startDate;
let endDate;

let apiRecords;

let output;
let programTypes;
let programMonths;

export let dataPromise = fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    let apiRecords = data.records.map(record => record.fields);
    [output, programTypes, programMonths] = parseData(apiRecords);

    return [output, programTypes, programMonths];
  });

function parseData(apiRecordsArr) {
  let outputArr = [];
  let programTypesArr = [];
  let programMonthsArr = [];

  apiRecordsArr.forEach(record => {
    if (
      record['Show on Website'] &&
      record.hasOwnProperty('Start') &&
      record.hasOwnProperty('End')
    ) {
      if (record.Start && record.End) {
        startDate = new Date(record.Start);
        endDate = new Date(record.End);
        outputArr.push({
          // Some properties are required by highcharts gantt:
          // start (in epoch time), end (in epoch time), color, name
          alumni: record['Open to Alumni'],
          audience: stringifyArr(record, 'Audience'),
          color: customColors[record.Theme],
          completed: today > endDate ? true : false,
          contactEmails: record['Contact Emails'],
          contactNames: record['Contact Names'],
          description: record.Description,
          end: endDate.getTime(),
          link: record.URL,
          mode: stringifyArr(record, 'Delivery Mode'),
          // todo: just months is good enough for now, but really need year-months for long-term use
          // create something like {2020: [..., ...], 2021: [...]}
          months: getProgramMonths(startDate, endDate),
          name: record['Program Name'],
          //  todo: allow multiple select
          programType: record['Program Type'],
          quickDescription: record['Quick Description'],
          start: startDate.getTime(),
          theme: record.Theme,
        });
      }
    }
  });
  programTypesArr = [...new Set(outputArr.map(el => el.programType))];

  programMonthsArr = [...new Set(outputArr.map(el => el.months).flat())];
  console.log(programMonthsArr);
  return [outputArr, programTypesArr, programMonthsArr];
}

function getProgramMonths(startDate, endDate) {
  const firstMonth = startDate.getMonth();
  const lastMonth = endDate.getMonth();
  return monthsArr.slice(firstMonth, lastMonth + 1);
}
