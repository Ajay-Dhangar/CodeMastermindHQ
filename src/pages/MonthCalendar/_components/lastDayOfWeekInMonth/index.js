export default function lastDayOfWeekInMonth(
  year,
  month,
  dayOfWeek,
  stopDay = 0,
) {
  // example: "super saturday" -
  // last saturday before 25 December:
  // lastDayOfWeekInMonth(2022, 11, 6, 24)
  let lastDay = new Date(year, month, stopDay);
  lastDay.setDate(lastDay.getDate() - ((lastDay.getDay() + 7 - dayOfWeek) % 7));
  return lastDay.getDate();
}
