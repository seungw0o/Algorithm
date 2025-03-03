import sys

N = int(sys.stdin.readline())
arr = []
total = 0

for i in range(N):
    a = int(sys.stdin.readline())
    if a == 0:
        arr.pop()
    else:
        arr.append(a)

for a in arr:
    total += a

print(total)