import {isBefore} from 'date-fns';
import {isThisWeek, isToday, isYesterday, format} from 'date-fns';

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

export const formattedDate = (date) => {
  let formattedText = 'visto por último ';
  const hourFormatted = format(new Date(date), 'p');
  const dateFormatted = format(new Date(date), 'dd/MM/yyyy');

  if (isToday(date)) {
    return formattedText = formattedText +
    `hoje às ${hourFormatted}}`;
  }

  if (isYesterday(date)) {
    return formattedText = formattedText +
    `ontem às ${hourFormatted}`;
  }

  if (isThisWeek(date)) {
    const dayOfTheWeek = format(new Date(date), 'eeee');
    return formattedText = formattedText +
    `${dayOfTheWeek} às ${hourFormatted}`;
  }

  return formattedText = formattedText + dateFormatted;
};

