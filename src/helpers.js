export function stringifyArr(obj, prop) {
  let stringProp;
  if (obj.hasOwnProperty(prop)) {
    stringProp = obj[prop].join(', ');
  } else {
    stringProp = '';
  }
  return stringProp;
}

export function getFormattedDateFromEpoch(epoch) {
  let month = Intl.DateTimeFormat('en-US', { month: 'short' }).format(epoch);
  let date = new Date(epoch).getDate();
  return `${month} ${date}`;
}
