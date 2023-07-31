export function formatDateToCustomFormat(dateString, isGetMonth) {
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const daysOfWeek = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота"
  ];

  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  if (isGetMonth) {
    return month;
  }
  const formattedDate = `${dayOfWeek}, ${month} ${day < 10 ? "0" + day : day}, ${year}`;
  return formattedDate;
}

export function contributionCount (contribution) {
  if (contribution < 10 && contribution > 0) {
    return '#ACD5F2'
  } else if (contribution < 20 && contribution > 9) {
    return '#7FA8C9'
  } else if (contribution < 30 && contribution > 19) {
    return '#527BA0'
  } else if (contribution < 40 && contribution > 29) {
    return '#254E77'
  } else {
    return '#EDEDED'
  }
}

export const rangeBlocks = [
  {
    color: '#EDEDED',
    contribute: 'No'
  },
  {
    color: '#ACD5F2',
    contribute: '1-9'
  },
  {
    color: '#7FA8C9',
    contribute: '10-19'
  },
  {
    color: '#527BA0',
    contribute: '20-29'
  },
  {
    color: '#254E77',
    contribute: '30+'
  },
];