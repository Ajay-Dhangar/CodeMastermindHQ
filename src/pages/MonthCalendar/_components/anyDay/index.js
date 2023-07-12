export default function AnyDay(year, month, ordinal, dayOfWeek) {
  let d = new Date(year, month, 0);

  d.setHours(0, 0, 0, 0);

  const ORDINALCONST =
    7 * ordinal + dayOfWeek - d.getDay() - (d.getDay() < dayOfWeek ? 7 : 0);

  d.setDate(d.getDate() + ORDINALCONST);

  return d.getDate();
}
