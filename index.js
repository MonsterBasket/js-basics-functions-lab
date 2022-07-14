const homeBase = 42;

function distanceFromHqInBlocks(destination, start = homeBase){
    let distance = destination - start;
    return Math.abs(distance);
}
function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination) * 264;
}
function distanceTravelledInFeet(destination, start = homeBase){
    return distanceFromHqInBlocks(destination, start) * 264;
}
function calculatesFarePrice(destination, start = homeBase){
    let distance = distanceTravelledInFeet(destination, start);
    if (distance <=400)
        return 0;
    else if (distance <=2000)
        return (distance - 400) * 0.02;
    else if (distance <=2500)
        return 25;
    else
        return 'cannot travel that far';
}