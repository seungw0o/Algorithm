import sys

A, B, V = map(int, sys.stdin.readline().split())


if (V - B) % (A - B) == 0:
    days = (V - B) // (A - B)
else:
    days = (V - B) // (A - B) + 1

print(days)
