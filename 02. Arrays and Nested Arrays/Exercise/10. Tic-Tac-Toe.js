function solve(data) {
    let initialDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isPlayerOnePlay = true;
 
    for (let cordinates of data) {
        let [x, y] = cordinates.split(' ').map(Number);
        let marker = isPlayerOnePlay ? 'X' : 'O';

        if (initialDashboard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;            
        }

        initialDashboard[x][y] = marker;
        
        if (checkWin(initialDashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(initialDashboard);
        }

        if (!checkFreeSpace(initialDashboard)) {
            console.log(`The game ended! Nobody wins :(`);
            return printDashboard(initialDashboard);
        }

        isPlayerOnePlay = !isPlayerOnePlay;
    }

    function checkWin (dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker && dashboard[i][1] === marker && dashboard[i][2] === marker) {
                return true;
            } else if (dashboard[0][i] === marker && dashboard[1][i] === marker && dashboard[2][i] === marker) {
                return true;
            } else if (dashboard[0][0] === marker && dashboard[1][1] === marker && dashboard[2][2] === marker) {
                return true;
            } else if (dashboard[0][2] === marker && dashboard[1][1] === marker && dashboard[2][0] === marker) {
                return true;
            }
            return false;
        }
    }

    function checkFreeSpace (dashboard) {
        let array = dashboard.flat();
        let allFalseElement = array.filter(el => el === false);
        if (allFalseElement.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function printDashboard (dashboard) {
        dashboard.forEach(row => console.log(row.join('\t')));
    }
}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);