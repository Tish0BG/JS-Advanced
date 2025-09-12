function solve(steps, stepLenght, speed) {

    let speedInMs = speed / 3.6;
    let distance = steps * stepLenght;
    let time = distance / speedInMs;

    let timeFromBreaks = Math.floor(distance / 500) * 60;

    let result = time + timeFromBreaks;

    let hours = Math.floor(result / 3600);
    let minutes = Math.floor((result % 3600)/ 60);
    let seconds = Math.round(result % 60);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
solve(4000, 0.60, 5)