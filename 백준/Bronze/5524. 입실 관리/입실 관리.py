import sys

N = int(sys.stdin.readline())

words = []

for i in range(N):
    words.append(sys.stdin.readline())


for word in words:
    sys.stdout.write(word.lower())