import sys

N = int(sys.stdin.readline().strip())

for i in range(N, 0, -1):
    for j in range(i):
        print('*', end="")
    print('\n', end="")