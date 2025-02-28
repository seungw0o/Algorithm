import sys

N = int(sys.stdin.readline())
count = 0

if N < 3:
    sys.stdout.write("-1")
else:

    while N >= 0:
        if N % 5 == 0:
            count += N // 5
            N = 0
            break
        N -= 3
        count += 1


    if N < 0:
        sys.stdout.write("-1")
    else:
        sys.stdout.write(str(count))
