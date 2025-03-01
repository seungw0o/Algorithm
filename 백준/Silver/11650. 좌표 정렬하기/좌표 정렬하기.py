import sys

N = int(sys.stdin.readline())
coordinates = []

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    coordinates.append((x, y))

coordinates.sort()


for x, y in coordinates:
    sys.stdout.write(str(x) + " " + str(y) + "\n")
