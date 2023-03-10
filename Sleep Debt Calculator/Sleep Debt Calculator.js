const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday')
  {
    return 8;
  }
  else if (day === 'tuesday')
  {
    return 7;
  }
  else if (day === 'wednesday')
  {
    return 6;
  }
  else if (day === 'thursday')
  {
    return 5;
  }
  else if (day === 'friday')
  {
    return 4;
  }
  else if (day === 'saturday')
  {
    return 3;
  }
  else if (day === 'sunday')
  {
    return 2;
  }
  else 
  {
    return 'error';
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

 if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep');
} else if (actualSleepHours > idealSleepHours) {
  console.log('you got more sleep than needed');
} else {
  console.log('you got '+ (idealSleepHours - actualSleepHours) + ' you should get some rest');
}

}
calculateSleepDebt();
