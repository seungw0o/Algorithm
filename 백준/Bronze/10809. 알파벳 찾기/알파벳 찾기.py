import sys
alpha = [chr(c) for c in range(97,123)]
answer = []

words = sys.stdin.readline().strip()

for a in alpha:
    answer.append(words.find(a))


for a in answer:
    print(a, end=" ")
