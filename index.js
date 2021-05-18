// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(drivers=>drivers===name||drivers.toUpperCase()===name.toUpperCase());
}

function fuzzyMatch(drivers, start){
    return drivers.filter(drivers=>drivers.startsWith(start)||drivers.toUpperCase().startsWith(start.toUpperCase()));

}

function matchName(drivers, name){
    return drivers.filter(drivers=>drivers.name===name||drivers.name.toUpperCase()===name.toUpperCase());

}