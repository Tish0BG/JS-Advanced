function solve(face, suit) {
    const faces = {
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true,
        "9": true,
        "10": true,
        "J": true,
        "Q": true,
        "K": true,
        "A": true
    };

    const suits = {
        "S": '\u2660',
        "H": '\u2665',
        "D": '\u2666',
        "C": '\u2663'
    };

    if (!faces[face]) {
        throw new Error(`Invalid card face: ${face}`);
    }
    if (!suits[suit]) {
        throw new Error(`Invalid card suit: ${suit}`);
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}
solve('2', 'H');

console.log(solve('2', 'H'))