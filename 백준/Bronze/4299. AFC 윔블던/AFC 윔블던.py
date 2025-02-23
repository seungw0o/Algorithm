import  sys
S, M = map(int, sys.stdin.readline().split())

result = []

result.append(int((S + M)/2))
result.append(int((S - M)/2))
if (S + M) % 2 != 0 or (S - M) % 2 != 0 or result[0] < 0 or result[1] < 0:
    sys.stdout.write(str(-1))
else:
    result.sort(reverse=True)
    sys.stdout.write(' '.join(map(str, result)))