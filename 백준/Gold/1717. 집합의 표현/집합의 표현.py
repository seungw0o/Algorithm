import sys
sys.setrecursionlimit(10**6)

def find(parent, x):
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, a, b):
    a = find(parent, a)
    b = find(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

n, m = map(int, input().split())
parent = [0] * (n + 1)

for i in range(1, n+1):
    parent[i] = i

result = []

for _ in range(m):
    num, a, b = map(int, input().split())
    if num == 0:
        union(parent, a, b)
    else:
        result.append("YES" if find(parent, a) == find(parent, b) else "NO")

print("\n".join(result))

