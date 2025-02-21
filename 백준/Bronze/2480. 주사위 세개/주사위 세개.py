import sys
from collections import Counter

arr = []


arr.extend(sys.stdin.readline().strip().split())

def find_duplicates(arr):
    counts = Counter(arr)
    return [item for item, count in counts.items() if count > 1], counts

duplicates, counts = find_duplicates(arr)


if not duplicates:
    max_value = max(map(int, arr))
    print(max_value * 100)

elif len(duplicates) == 1 and counts[duplicates[0]] == len(arr):
    score = 10000 + (int(duplicates[0]) * 1000)
    print(score)

else:
    total_score = 1000
    for item in duplicates:
        total_score += int(item) * 100
    print(total_score)
