export const returnDateString = (date: Date) => {
  // Return in format DAY DDth MONTH YYYY
  return `${date.toLocaleString('en-GB', { weekday: 'long' })} ${date.getDate()}${[1, 21, 31].includes(date.getDate()) ? 'st' : [2, 22].includes(date.getDate()) ? 'nd' : [3, 23].includes(date.getDate()) ? 'rd' : 'th'} ${date.toLocaleString('en-GB', { month: 'long' })} ${date.getFullYear()}`;
};
