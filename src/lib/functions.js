/**
 * Give a first letter of day of week 
 * @param {Number} number
 * @returns string
 */
export function getFirstLetterOfDayOfWeek(number) {
  if (number < 1 || number > 7) return;
  switch (number) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";

    default:
      return "L";
  }
}
