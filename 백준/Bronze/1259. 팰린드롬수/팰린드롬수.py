import sys

answer = []

while True:
    N = sys.stdin.readline().strip()
    if N == '0':
        break
    else:
        arr = list(N)
        reverseArr = arr[::-1]
        if reverseArr == arr:
            answer.append('yes')
        else:
            answer.append('no')

sys.stdout.write('\n'.join(answer) + '\n')
