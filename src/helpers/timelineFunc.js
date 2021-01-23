const getRange = (firstDate, lastDate) => {
  const dates = [];
  let currentDate = firstDate;
  while (currentDate <= lastDate) {
    dates.push(currentDate);
    currentDate = currentDate + 86400000;
  }
  return dates;
};

export const buildTimeline = (items) => {
  const startDates = items.map((item) => new Date(item.fields.Start).getTime());
  const endDates = items.map((item) => new Date(item.fields.End).getTime());
  let firstDate = Math.min(...startDates);
  let lastDate = Math.max(...endDates);
  const range = getRange(firstDate, lastDate);
  const daysRange = range.map((day) => new Date(day).toISOString().slice(0, 10));
  return daysRange;
};
