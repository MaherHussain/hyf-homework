  let weekdays =["sunday", "monday","tuesday","Wednesday","Thursday","Friday","Saturday"];
 
    let  today  = new Date().getDay(); 
    let eventDay ;
    console.log(today);

function getEventWeekday(eventDayNum) {

eventDayNum = eventDayNum + today - 1
console.log(eventDayNum)

    if(eventDayNum < 7){
        return weekdays[eventDayNum ]
    }
    else{
        return weekdays[eventDayNum % 7 ]
    }

     
}
eventDay = getEventWeekday(7);
console.log( " event day will be " + eventDay);
