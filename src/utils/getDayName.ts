import { getDay } from "date-fns";

export default function getDayName(date: Date) {
  const dayInNumber = getDay(date);

  switch (dayInNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return null;
  }
}
