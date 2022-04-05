const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return ["Antonia", "Nuru"];

}

const returnLastTwoDrivers = function(){
    return ["Amari", "Mo"];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiply){
    return function(fare){
        return (multiply * fare)
    }
}

const  fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers){
    console.log (selectingDrivers);
    if (selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers()
    } else {
           return returnLastTwoDrivers()  
    }
}









     
