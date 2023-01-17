import { DateTime } from './luxon.js';

const dateContainer = () => {
  const container = document.querySelector('.date-section');
  const presentTime = DateTime.now();
  container.innerHTML += `<p>Today's date is ${presentTime.toLocaleString(DateTime.DATETIME_MED)}</p>`;
};

export default dateContainer;