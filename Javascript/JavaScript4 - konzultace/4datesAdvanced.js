//Date format YYYY-MM-DD
const arrayOfDates = ["2005-05-11", "1999-01-08", "2024-01-12"];

const getDatesInCorrectFormat = () => {
  let datesInCorrectFormat = [];
  for (let i = 0; i < arrayOfDates.length; i++) {
    let year = "";
    let month = "";
    let day = "";

    let currentDate = arrayOfDates[i];
    for (let j = 0; j < currentDate.length; j++) {
      if (j < 4) year += currentDate[j];
      if (j > 4 && j < 7) month += currentDate[j];
      if (j > 7) day += currentDate[j];
    }
    const NewDate = `${day}.${month}.${year}`;
    datesInCorrectFormat[i] = NewDate;
  }
  return datesInCorrectFormat;
};

console.log(getDatesInCorrectFormat());
