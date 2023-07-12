export default function secondMonday(year, month) {
  let firstDay = new Date(year, month, 1);
  if (firstDay.getDay() !== 1) {
    firstDay.setDate(firstDay.getDay() === 0 ? 2 : 9 - firstDay.getDay());
  }
  firstDay.setDate(firstDay.getDate() + 7);
  return firstDay.getDate();
  //var d = new Date(year, month, 1, 0, 0, 0);
  //d.setDate(d.getDate() + 15 - d.getDay());
  //return d.getDate();
}
