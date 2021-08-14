let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = false;
let runnersAge = 18;
if(runnersAge > 18 && earlyRegistered){
  raceNumber += 1000;
}
if(runnersAge > 18 && earlyRegistered){
  console.log(`Hi ${raceNumber}, your race starts at 9:30 am`);
}else if(runnersAge > 18 && !earlyRegistered){
    console.log(`Hi ${raceNumber}, your race starts at 11:00 am`);
}else if(runnersAge < 18){
    console.log(`Hi ${raceNumber}, your race starts at 12:30 pm`);
}else{
    console.log(`Hi ${raceNumber}, see the registration desk`);
}
