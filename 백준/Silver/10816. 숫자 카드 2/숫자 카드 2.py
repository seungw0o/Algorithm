from collections import Counter

# 입력 받기
N = int(input())
NA = list(map(int, input().split()))
M = int(input())
MA = list(map(int, input().split()))

# NA의 각 요소의 개수를 세기 위한 Counter 사용
count_dict = Counter(NA)

# MA의 요소를 확인하고 그에 대한 개수를 answer에 추가
answer = [count_dict[i] for i in MA]

# 결과 출력
print(*answer)
