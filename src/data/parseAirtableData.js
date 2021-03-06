// import { customColors } from './colors';
// import { stringifyArr } from '../helpers';

const endpoint =
  'https://batten-programs.netlify.app/.netlify/functions/getdata?view=Web';

let allMonthsArr = [
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

let output;
let programTypes;
let programMonths;

export let dataPromise = fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    [output, programTypes, programMonths] = parseData(data);
    return [output, programTypes, programMonths];
  });

function parseData(data) {
  let apiRecordsArr = data.records.map(record => {
    record.fields['id'] = record.id;
    return record.fields;
  });
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
        // Date objects will be created from strings of format '2020-10-28'.  This is how Airtable API returns dates.
        startDate = parseISOString(record.Start);
        endDate = parseISOString(record.End);
        outputArr.push({
          id: record.id,
          // Some properties are required by highcharts gantt: start (in epoch time), end (in epoch time), color, name
          // Can rename those if highchart is not used
          landing: record['Show on Landing Page'],
          alumni: record['Open to Alumni'],
          audience: record['Primary Audience'],
          completed: today > endDate ? true : false,
          // contactEmails: record['Contact Emails'],
          // contactNames: record['Contact Names'],
          description: record.Description,
          // end: endDate.getTime(),
          link: record.URL,
          // mode: stringifyArr(record, 'Delivery Mode'),
          // todo: just months is good enough for now, but really need year-months for long-term use
          // create something like {2020: [..., ...], 2021: [...]}?
          months: getProgramMonths(startDate, endDate),
          name: record['Program Name'],
          openTo: record['Open To'],
          programType: record['Program Type'],
          programTypeColor: record['Program Type New Color'],
          quickDescription: record['Quick Description'],
          startDate,
          endDate,
        });
      }
    }
  });
  programTypesArr = [
    ...new Set(outputArr.map(el => el.programType).flat()),
  ].sort();

  // Currently sorting is controlled by Airtable view. Which is perhaps good enough.
  // todo: make it more robust to account for correct sorting, year etc.
  programMonthsArr = [...new Set(outputArr.map(el => el.months).flat())];
  // console.log(programMonthsArr);
  return [outputArr, programTypesArr, programMonthsArr];
}

function getProgramMonths(startDate, endDate) {
  const firstMonth = startDate.getMonth();
  const lastMonth = endDate.getMonth();
  return allMonthsArr.slice(firstMonth, lastMonth + 1);
}

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(b[0], --b[1], b[2]);
}
