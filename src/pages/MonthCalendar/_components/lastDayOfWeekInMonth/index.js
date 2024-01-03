export default function lastDayOfWeekInMonth(
  year,
  month,
  dayOfWeek,
  stopDay = 0,
) {
  let lastDay = new Date(year, month, stopDay);
  lastDay.setDate(lastDay.getDate() - ((lastDay.getDay() + 7 - dayOfWeek) % 7));
  return lastDay.getDate();
}
