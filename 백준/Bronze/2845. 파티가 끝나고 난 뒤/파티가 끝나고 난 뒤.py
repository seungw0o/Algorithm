import sys

L, P = map(int, sys.stdin.readline().split())
total = L * P
members=list(map(int,sys.stdin.readline().split()))

result = []
for member in members:
    result.append(member - total)



sys.stdout.write(' '.join(map(str, result)))