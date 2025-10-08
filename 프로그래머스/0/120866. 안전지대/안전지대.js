function solution(board) {
  const n = board.length;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const danger = Array.from({ length: n }, () => Array(n).fill(0));

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 1) {
        for (let i = 0; i < 8; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            danger[nx][ny] = 1;
          }
        }
      }
    }
  }

  let safe = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 0 && danger[x][y] === 0) safe++;
    }
  }

  return safe;
}
