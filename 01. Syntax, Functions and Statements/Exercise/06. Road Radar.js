function solve(speed, area) {

    function calcStatus(difference) {
        if (difference <= 20) {
            return 'speeding';
        } else if (difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let currentSpeed = Number(speed);

    if (currentSpeed > speedLimits[area]) {
        let difference = currentSpeed - speedLimits[area];
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${calcStatus(difference)}`);
    } else {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimits[area]} zone`);
    }
}
solve(71, 'city')