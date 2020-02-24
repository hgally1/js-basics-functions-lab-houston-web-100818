// Code your solution in this file!
function distanceFromHqInBlocks(block) {
   return Math.abs(block - 42)
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, dest){
    return Math.abs(start-dest) * 264
}

function calculatesFarePrice(x,y) {
    result = distanceTravelledInFeet(x,y)

    if (result <= 400){
        cost = 0;
    }
    else if (result >400 && result < 2000){
        cost = (result - 400) * .02;
    }
    else if (result >= 2000 && result < 2500){
        cost = 25;
    }
    else if (result > 2500){
        cost = 'cannot travel that far';
    }

    return cost

}