from collections import deque

n, m = map(int, input().split())
maze = [list(map(int, input())) for _ in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

queue = deque()
queue.append((0, 0))

while queue:
    x, y = queue.popleft()

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < n and 0 <= ny < m and maze[nx][ny] == 1:
            queue.append((nx, ny))
            maze[nx][ny] = maze[x][y] + 1

print(maze[n - 1][m - 1])