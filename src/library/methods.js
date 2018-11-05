// ID generator -
// With execution time test, userIdGenerator fn is a little bit faster than generateUUID

export const userIdGenerator = () =>{
  let userId = "";
  const lettersNumbers =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lengthOfnumLet = lettersNumbers.length;

  for (var i = 0; i < 7; i++) {
    userId += lettersNumbers[Math.floor(Math.random() * lengthOfnumLet)];
  }
  return userId;
}


// Get the current time and display the time
export const displayDateTime = () => {
  let now = new Date();
  let day = now.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = now.getMonth();
  if (month < 10) {
    month = "0" + month;
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
}