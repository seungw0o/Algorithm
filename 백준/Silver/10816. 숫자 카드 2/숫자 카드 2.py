from collections import Counter


N = int(input())
NA = list(map(int, input().split()))
M = int(input())
MA = list(map(int, input().split()))


count_dict = Counter(NA)


answer = [count_dict[i] for i in MA]


print(*answer)
