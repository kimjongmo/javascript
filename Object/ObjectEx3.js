let person ={
  weekendAlarm : 'No alarms needed',
  weekAlarm : 'Alarm set to 7AM'
};
let day = 'Saturday';
let alarm;
if(day==='Saturday'||day==='Sunday'){
  alarm ='weekendAlarm';
}else{
  alarm = 'weekAlarm'
}

console.log(person[alarm]);