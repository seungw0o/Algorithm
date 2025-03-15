import sys

K, N, M = map(int, sys.stdin.readline().split())

if (K * N) - M < 0:
    sys.stdout.write("0")
else:
    sys.stdout.write(str((K * N) - M))