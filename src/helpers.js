export function stringifyArr(obj, prop) {
  let stringProp;
  if (obj.hasOwnProperty(prop)) {
    stringProp = obj[prop].join(', ');
  } else {
    // console.log(prop, 'not found in ', obj);
    stringProp = '';
  }
  return stringProp;
}

export function getFormattedDateFromEpoch(epoch) {
  let month = Intl.DateTimeFormat('en-US', { month: 'short' }).format(epoch);
  let date = new Date(epoch).getDate();
  return `${month} ${date}`;
}
