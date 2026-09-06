//q1
function describeValue(value) {
    ans1=typeof value;
    ans2=value? "truthy" : "falsy";
    return ans1 + ' | ' + ans2;
}

//q2
function getDayType(day) {
    day=day.toLowerCase();
    switch(day){
        case "friday":
            return "Weekend";
        case "saturday":
            return "Weekend";
        case "sunday":
            return "Working Day";
        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

//q3
function validateUsername(username) {
    username=username.toLowerCase();
    if(username.length<4) {
        return "Too Short";
    }
    else if(username.includes(" ")) {
        return "No Space Allowed";
    }
    else if(username.includes("admin")) {
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

//q4
function getCngFare(distance,isNight=false,waitingMinutes=0) {
    let fare=50;
    if(distance>2){
        fare=fare+(distance-2)*15;
    }
    fare=fare+(waitingMinutes*2);
    if(isNight){
        fare=fare+(fare*0.2);
    }
    return fare;
}

//q5
const getChaseVerdict=(target,scored,ballsLeft)=>{
    const runsNeeded=target-scored;

    if(runsNeeded<=0){
        return "Won";
    }
    if(ballsLeft<=0){
        return "Lost";
    }

    const requiredRate=(runsNeeded/ballsLeft)*6;

    let verdict;
    if(requiredRate<=6){
        verdict="Comfortable";
    }
    else if(requiredRate<=12){
        verdict="Tough";
    }
    else{
        verdict="Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
