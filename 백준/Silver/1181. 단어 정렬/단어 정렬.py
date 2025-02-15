import sys
N = int(sys.stdin.readline().strip())
arr = []


for _ in range(N):
    arr.append(sys.stdin.readline().strip())

sorted_words = list(dict.fromkeys(sorted(arr, key=lambda x: (len(x), x))))


for word in sorted_words:
    print(word)