import sys

input = sys.stdin.readline

NK = list(map(int, input().split()))
coin=[]
cnt = 0
for i in range(NK[0]):
    coin.append(int(input()))

coin.sort(reverse=True)

for c in coin:
    if NK[1] == 0:
        break
    if c <= NK[1]:
        cnt += NK[1] // c
        NK[1] %= c

print(cnt)