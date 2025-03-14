import sys


S = list(map(int,sys.stdin.readline().split()))
T = list(map(int,sys.stdin.readline().split()))

sys.stdout.write(str(max(sum(S),sum(T))))