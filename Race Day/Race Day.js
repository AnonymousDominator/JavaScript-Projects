let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 17;

if (age > 18 && registeredEarly)
{
  raceNumber += 1000;
}

if (regsiteredEarly = false && age > 18) 
{
  console.log(`Race at 9:30 am, Race number :${raceNumber}`);
} 

else if (registeredEarly = true && age > 18) 

{
  console.log(`Race at 11:00 am, Race number : ${raceNumber}`);
}

else if (age < 18) 
{
  console.log(`Youth regsitrants run at 12:30 pm, Race number : ${raceNumber}`);
} 

else 
{
  console.log('runner, see the registration desk');
}
