import sys
import math

N = int(sys.stdin.readline())
count = 0
fac = math.factorial(N)
array = list(map(int, str(fac)))

for number in reversed(array):
    if number == 0:
        count += 1
    else:
        break

sys.stdout.write(str(count))