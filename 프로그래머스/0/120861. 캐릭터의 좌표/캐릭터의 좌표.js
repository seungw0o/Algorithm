function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;

    keyinput.forEach((key) => {
        switch (key) {
            case "left":
                if (x > -maxX) x -= 1;
                break;
            case "right":
                if (x < maxX) x += 1;
                break;
            case "down":
                if (y > -maxY) y -= 1;
                break;
            case "up":
                if (y < maxY) y += 1;
                break;
        }
    });

    return [x, y];
}
