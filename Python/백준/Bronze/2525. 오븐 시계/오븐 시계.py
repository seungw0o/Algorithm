Time = list(map(int, input().split()))
h = Time[0]
m = Time[1]
C = int(input())

# 현재 시각에 C분을 더한다.
total_minutes = h * 60 + m + C

# 새로운 시각을 계산한다.
new_h = (total_minutes // 60) % 24
new_m = total_minutes % 60

print(f"{new_h} {new_m}")
