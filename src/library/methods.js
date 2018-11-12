// ID generator -
// With execution time test, userIdGenerator fn is a little bit faster than generateUUID

export const userIdGenerator = () => {
  let userId = "";
  const lettersNumbers =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lengthOfnumLet = lettersNumbers.length;

  for (var i = 0; i < 3; i++) {
    userId += lettersNumbers[Math.floor(Math.random() * lengthOfnumLet)];
  }
  return userId;
};

// Get the current time and display the time
export const displayDateTime = () => {
  let now = new Date();
  let day = now.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = now.getMonth();
  if (month < 10) {
    month = "0" + month + 1;
  } else {
    month = month + 1;
  }
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = "0" + month;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const displayMonth = () => {
  const namesOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let now = new Date();
  let month = namesOfMonth[now.getMonth()];
  return `'${month}'`;
};

export const giveCommaEverythreeDigits = num => {
  const regex = /(\d)(?=(\d{3})+$)/g;
  let str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(regex, "$1,");
  }
  return str.join('.');
};
