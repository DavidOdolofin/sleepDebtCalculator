const getSleepHours = (day) => {
 if (day === 'monday') {
   return 8;
} else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 4;
  } else if (day === 'saturday') {
    return 3;
  } else if (day === 'sunday') {
    return 2;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
  console.log(`user got the ${idealSleepHours} perfect amount of sleep.`);
} else if (actualSleepHours > idealSleepHours) {
  console.log(`user got ${actualSleepHours - idealSleepHours} hour(s) more sleep than needed.`);
} else {
  console.log(`user got ${idealSleepHours - actualSleepHours} hour(s) less sleep than needed.`);
}
}
calculateSleepDebt();

























