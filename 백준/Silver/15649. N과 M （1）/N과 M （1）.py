n, m = map(int, input().split())
path = []
visited = [False] * (n+1)

def dfs():
    if len(path) == m:
        print(*path)
        return
    for i in range(1,n+1):
        if not visited[i]:
            visited[i] = True
            path.append(i)
            dfs()
            path.pop()
            visited[i] = False

dfs()