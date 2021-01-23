import { buildTimeline } from './timelineFunc.js';

const calculateEventLength = (items) => {
  return items.map((item) => {
    let start = new Date(item.fields.Start);
    let end = new Date(item.fields.End);
    let diffDays = Math.floor((end.getTime() - start.getTime()) / 86400000);
    item.lengthInDays = diffDays;
    return item;
  });
};

const calculateColumnStart = (items) => {
  const allDates = buildTimeline(items);
  const timelineStartDate = new Date(allDates[0]);
  return items.map((item) => {
    let currentStartDate = new Date(item.fields.Start);
    let diffDays = Math.floor((currentStartDate.getTime() - timelineStartDate.getTime()) / 86400000);
    item.distanceFromStart = diffDays;
    return item;
  });
};

const sortByStart = (items) => {
  return items.sort((a, b) => {
    let aStart = new Date(a.fields.Start).getTime();
    let bStart = new Date(b.fields.Start).getTime();
    if (aStart < bStart) {
      return -1;
    } else if (aStart > bStart) {
      return 1;
    } else {
      if (a.lengthInDays > b.lengthInDays) {
        return 1;
      } else {
        return -1;
      }
    }
  });
};

const sortRecords = (items) => {
  sortByStart(items);
  items[0].placed = true;
  let rows = [[items[0]]];
  let placedItems = 1;
  let row = 0;
  while (placedItems < items.length) {
    for (let i = 1; i < items.length; i++) {
      if (!items[i].placed) {
        if ((rows.length - 1) === row) {
          let start = new Date(items[i].fields.Start).getTime();
          let end = new Date(rows[row][rows[row].length - 1].fields.End).getTime();
          if (start !== end && start > end) {
            items[i].placed = true;
            rows[row].push(items[i]);
            placedItems++;
          }
        } else {
          items[i].placed = true;
          rows.push([items[i]]);
          placedItems++;
        }
      }
    }
    row++;
  }
  const timeline = rows.flat(2);
  return timeline;
};

export const updateRecords = (items) => {
  let copyOfItems = items.slice(0);
  copyOfItems = calculateEventLength(copyOfItems);
  copyOfItems = calculateColumnStart(copyOfItems);
  copyOfItems = sortRecords(copyOfItems);
  return copyOfItems;
};