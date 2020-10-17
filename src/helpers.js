export function stringifyArr(obj, prop) {
  let stringProp;
  if (obj.hasOwnProperty(prop)) {
    stringProp = obj[prop].join(', ');
  } else {
    stringProp = '';
  }
  return stringProp;
}

export function getFormattedDate(dateObject) {
  let month = Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    dateObject,
  );
  let date = dateObject.getDate();
  return `${month} ${date}`;
}
