import {isBefore} from 'date-fns';

export const compareDates = (firstElement, secondElement) => {
  const firstDate = new Date(firstElement.lastMessage);
  const secondDate = new Date(secondElement.lastMessage);
  if (isBefore(firstDate, secondDate)) {
    return 1;
  }
  if (isBefore(secondDate, firstDate)) {
    return -1;
  }

  return 0;
};

