// import { customColors } from './colors';
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
        startDate = new Date(record.Start);
        endDate = new Date(record.End);
        outputArr.push({
          id: record.id,
          // Some properties are required by highcharts gantt: start (in epoch time), end (in epoch time), color, name
          // Can rename those if highchart is not used
          alumni: record['Open to Alumni'],
          audience: stringifyArr(record, 'Audience'),
          completed: today > endDate ? true : false,
          // contactEmails: record['Contact Emails'],
          // contactNames: record['Contact Names'],
          description: record.Description,
          // end: endDate.getTime(),
          link: record.URL,
          // mode: stringifyArr(record, 'Delivery Mode'),
          // todo: just months is good enough for now, but really need year-months for long-term use
          // create something like {2020: [..., ...], 2021: [...]}
          months: getProgramMonths(startDate, endDate),
          name: record['Program Name'],
          programType: record['Program Type'],
          programTypeColor: record['Program Type Color'],
          quickDescription: record['Quick Description'],
          start: startDate.getTime(),
          end: endDate.getTime(),
        });
      }
    }
  });
  programTypesArr = [
    ...new Set(outputArr.map(el => el.programType).flat()),
  ].sort();

  // todo: make it more robust to account for correct sorting, year etc.
  programMonthsArr = [...new Set(outputArr.map(el => el.months).flat())];

  return [outputArr, programTypesArr, programMonthsArr];
}

function getProgramMonths(startDate, endDate) {
  const firstMonth = startDate.getMonth();
  const lastMonth = endDate.getMonth();
  return monthsArr.slice(firstMonth, lastMonth + 1);
}
