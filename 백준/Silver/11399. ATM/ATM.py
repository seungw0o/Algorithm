import sys

input = sys.stdin.readline
answer = 0
N = int(input())
P = list(map(int, input().split()))

P.sort()

for i in range(1, N+1):
    answer += sum(P[0:i])



print(answer)