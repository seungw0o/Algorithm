import sys

numbers=list(map(int,sys.stdin.readline().split()))

numbers.sort()
for number in numbers:
    sys.stdout.write(str(number) + " ")