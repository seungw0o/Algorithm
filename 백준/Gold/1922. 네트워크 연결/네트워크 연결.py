import sys
import heapq
input = sys.stdin.readline

def prim(n, graph, start=1):
    visited = [False] * (n + 1)
    min_heap = []

    heapq.heappush(min_heap,(0,start))
    total_cost = 0

    while min_heap:
        cost, now = heapq.heappop(min_heap)

        if visited[now]:
            continue
        visited[now] = True
        total_cost += cost

        for next_node, next_cost in graph[now]:
            if not visited[next_node]:
                heapq.heappush(min_heap, (next_cost, next_node))

    return total_cost

n = int(input())
m = int(input())
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, cost = map(int, input().split())
    graph[a].append((b, cost))
    graph[b].append((a, cost))

print(prim(n, graph))