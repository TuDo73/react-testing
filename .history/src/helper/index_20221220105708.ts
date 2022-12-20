export const calculateDurationBetweenTwoRawHours = (
  firstHour: number,
  secondHour: number
): number => {
  if (firstHour >= 24 || secondHour >= 24) return 0;
  if (firstHour < 0 || secondHour < 0) return 0;

  const isSameDay = secondHour >= firstHour;

  if (isSameDay) {
    return secondHour - firstHour;
  } else {
    const diff1 = 24 - firstHour;
    return secondHour + diff1;
  }
};
